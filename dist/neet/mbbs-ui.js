'use strict';
let mbbsProgress={done:[],notes:{},last:''},mbbsStorageError=false;
try {
  const raw=JSON.parse(localStorage.getItem('medico-mbbs-v1')||'null');
  if(raw && typeof raw==='object'){
    mbbsProgress.done=Array.isArray(raw.done)?[...new Set(raw.done.filter(id=>MBBS_TOPIC_IDS.has(id)))]:[];
    if(raw.notes && typeof raw.notes==='object' && !Array.isArray(raw.notes))
      for(const [id,note] of Object.entries(raw.notes)) if(MBBS_TOPIC_IDS.has(id)&&typeof note==='string') mbbsProgress.notes[id]=note.slice(0,6000);
    if(MBBS_TOPIC_IDS.has(raw.last))mbbsProgress.last=raw.last;
  }
} catch { /* Invalid or unavailable stored data must not prevent studying. */ }
let mbbsQuery='',mbbsStatus='all',mbbsFilterSubject='all',mbbsCurrentYear=null,mbbsCurrentSubject=null;
const mbbsTopic=id=>MBBS_TOPICS.find(t=>t.id===id);
const mbbsYear=id=>MBBS_YEARS.find(y=>y.id===id);
function saveMbbsProgress(){
  try{localStorage.setItem('medico-mbbs-v1',JSON.stringify(mbbsProgress));mbbsStorageError=false;}
  catch{mbbsStorageError=true;}
  const status=$('#mbbs-save-status');
  if(status)status.textContent=mbbsStorageError?'Storage unavailable. Changes last for this visit only; copy your notes before leaving.':'Saved on this device.';
}
function mbbsCompletion(topics){return topics.filter(t=>mbbsProgress.done.includes(t.id)).length;}
function mbbsProgressBar(topics){const done=mbbsCompletion(topics);return `<div class="mbbs-progress"><span>${done} of ${topics.length} topics marked complete</span><progress max="${topics.length||1}" value="${done}" aria-label="Topic completion">${done} / ${topics.length}</progress></div>`;}
function mbbsSourceNote(){return `<details class="mbbs-scope"><summary>Curriculum version and how to use this study sequence</summary><p>Year labels here follow the Indian NMC CBME 2024 framework: Year 1 = Phase I, Year 2 = Phase II, Year 3 = Phase III Part I. These are the main professional examination subject groupings; teaching and postings also run across phases. Your university's batch-specific timetable may differ.</p><p>Topic order and notes are an original learning sequence covering major topic groups. They are not an official competency-by-competency checklist or a complete MBBS textbook. Use your college syllabus and supervised practical, clinical, and field teaching alongside these pages.</p><p>Phase III Part II (final professional) is separate from third-year Part I. Its existing collections remain available in <a href="#catalog">Explore subjects</a>.</p><p><a href="${esc(MBBS_SOURCE.url)}" target="_blank" rel="noopener">${esc(MBBS_SOURCE.title)} ↗</a> · <a href="${esc(MBBS_SOURCE.directory)}" target="_blank" rel="noopener">NMC regulations and updates ↗</a></p><p class="fine">${esc(MBBS_SOURCE.allocation)} Source checked ${esc(MBBS_SOURCE.checked)}. Original notes have not received clinician editorial review.</p></details>`;}
function mbbsHomeBanner(){return `<section class="mbbs-home-banner"><div><span class="eyebrow">A YEAR-BY-YEAR PATH THROUGH MBBS</span><h2>One year. One subject. One topic at a time.</h2><p>${MBBS_TOPICS.length} topic study pages across first, second, and third year, with explanations, recall, reading, and your own study notes.</p></div><a class="btn" href="#mbbs">Study by MBBS year →</a></section>`;}
function mbbsSubjectEntry(id){const y=MBBS_YEARS.find(v=>v.subjects.includes(id));if(!y)return '';const count=MBBS_TOPICS.filter(t=>t.subject===id).length;return `<section class="mbbs-home-banner"><div><span class="eyebrow">${esc(y.name)} MBBS · ${esc(y.phase)}</span><h2>Study ${esc(subj(id).name)} topic by topic</h2><p>${count} focused pages with explanations, key points, recall, and your study record.</p></div><a class="btn" href="#mbbs/${y.id}/${id}">Open the topic sequence →</a></section>`;}
function mbbsYearCard(y){const topics=MBBS_TOPICS.filter(t=>t.year===y.id);return `<article class="mbbs-year-card" style="--year-color:${y.color}"><span class="eyebrow">${esc(y.phase)}</span><h2><a href="#mbbs/${y.id}">${esc(y.name)}</a></h2><p>${esc(y.description)}</p><p class="mbbs-subject-names">${y.subjects.map(id=>esc(subj(id).name)).join(' · ')}</p>${mbbsProgressBar(topics)}<a class="btn secondary" href="#mbbs/${y.id}">Explore ${topics.length} topics →</a></article>`;}
function mbbsBridge(y){return `<section class="panel mbbs-bridge"><span class="eyebrow">ALONGSIDE YOUR MAIN SUBJECTS</span><h2>Clinical exposure, communication and practical learning</h2><p>${esc(y.practice)}</p><p>Keep a supervised logbook for practical and clinical work. A topic completion mark below records your own study progress, not certification of a clinical skill.</p><div class="mbbs-bridge-links">${y.bridge.map(id=>{const l=lesson(id);return `<button class="btn secondary" data-action="lesson" data-id="${id}">${esc(l.title)}</button>`;}).join('')}</div><p>Continue community and family learning through <a href="#mbbs/3/community">population-health topics</a>, and ethical reasoning through <a href="#mbbs/3/forensic">professional-practice topics</a>. These themes are revisited across years.</p></section>`;}
function mbbsHub(yearId=null,subjectId=null){
  const y=yearId?mbbsYear(yearId):null;
  if(yearId&&!y || subjectId&&(!y||!y.subjects.includes(subjectId)))return notFound();
  mbbsCurrentYear=yearId;mbbsCurrentSubject=subjectId;
  const allowed=y?y.subjects:MBBS_YEARS.flatMap(v=>v.subjects);
  if(!allowed.includes(mbbsFilterSubject))mbbsFilterSubject='all';
  const s=subjectId?subj(subjectId):null;
  const pool=MBBS_TOPICS.filter(t=>(!y||t.year===y.id)&&(!s||t.subject===s.id));
  const last=mbbsTopic(mbbsProgress.last),next=pool.find(t=>!mbbsProgress.done.includes(t.id));
  const resume=last&&pool.includes(last)?last:next;
  main.innerHTML=`<article class="mbbs-hub"><nav class="mbbs-breadcrumbs" aria-label="Study location"><a href="#catalog">Library</a><span>/</span><a href="#mbbs">MBBS years</a>${y?`<span>/</span><a href="#mbbs/${y.id}">${esc(y.name)}</a>`:''}${s?`<span>/</span><span>${esc(s.name)}</span>`:''}</nav>
    <div class="page-head"><span class="eyebrow">${y?esc(y.phase):'FROM FOUNDATION TO CLINICAL UNDERSTANDING'}</span><h1>${s?esc(s.name):y?esc(y.name)+' MBBS':'Your MBBS study pathway.'}</h1><p>${s?esc(MBBS_SUBJECT_NOTES[s.id]):y?esc(y.description):'Choose a year, open a subject, and work through one focused topic at a time. Start with plain-language reasoning and build toward the medical terms.'}</p></div>
    <nav class="mbbs-year-tabs" aria-label="MBBS years"><a href="#mbbs" ${!y?'aria-current="page"':''}>All years</a>${MBBS_YEARS.map(v=>`<a href="#mbbs/${v.id}" ${y?.id===v.id?'aria-current="page"':''}>${esc(v.name)}</a>`).join('')}</nav>
    ${!y?`<div class="mbbs-year-grid">${MBBS_YEARS.map(mbbsYearCard).join('')}</div>`:''}
    <section class="mbbs-study-summary panel"><div><h2>${s?'Your subject progress':y?'Your year progress':'Your study progress'}</h2>${mbbsProgressBar(pool)}</div><div class="buttons">${resume?`<a class="btn" href="#topic/${resume.id}">${last===resume?'Continue: ':'Start: '}${esc(resume.title)}</a>`:'<a class="btn" href="#mbbs">Review completed topics</a>'}${next&&next!==resume?`<a class="btn secondary" href="#topic/${next.id}">Next unfinished topic</a>`:''}<a class="btn ghost" href="#words">Medical word guide</a></div></section>
    ${y&&!s?`<section class="mbbs-subject-grid" aria-label="Year subjects">${y.subjects.map(id=>{const group=MBBS_TOPICS.filter(t=>t.subject===id);return `<a class="panel mbbs-subject-card" href="#mbbs/${y.id}/${id}"><span class="eyebrow">${group.length} TOPICS</span><h2>${esc(subj(id).name)}</h2><p>${esc(MBBS_SUBJECT_NOTES[id])}</p><span>${mbbsCompletion(group)} / ${group.length} complete →</span></a>`;}).join('')}</section>`:''}
    <section class="mbbs-browser" aria-label="Find study topics"><div class="section-title"><div><span class="eyebrow">TOPIC BY TOPIC</span><h2>${s?'Your topic sequence':'Find your next topic'}</h2></div></div><div class="mbbs-filters panel"><div><label for="mbbs-search">Search topics and concepts</label><input id="mbbs-search" type="search" value="${esc(mbbsQuery)}" placeholder="Try brachial plexus, enzymes, or screening…" maxlength="200"></div>${!s?`<div><label for="mbbs-subject">Subject</label><select id="mbbs-subject"><option value="all">All subjects${y?' in this year':''}</option>${allowed.map(id=>`<option value="${id}" ${mbbsFilterSubject===id?'selected':''}>${esc(subj(id).name)}</option>`).join('')}</select></div>`:''}<div><label for="mbbs-status">Study status</label><select id="mbbs-status"><option value="all" ${mbbsStatus==='all'?'selected':''}>All topics</option><option value="todo" ${mbbsStatus==='todo'?'selected':''}>Not completed</option><option value="done" ${mbbsStatus==='done'?'selected':''}>Completed</option></select></div></div><p id="mbbs-result-count" class="fine" role="status"></p><div id="mbbs-results"></div></section>
    ${y?mbbsBridge(y):'<section class="panel mbbs-bridge"><h2>New to medical science?</h2><p>Build confidence with 14 foundation lessons on cells, body systems, medical words, and learning skills.</p><a class="btn secondary" href="#subject/foundation">Start from the basics</a></section>'}${mbbsSourceNote()}</article>`;
  renderMbbsResults();
}
function filteredMbbsTopics(){
  const terms=wordNormalize(mbbsQuery).trim().split(/\s+/).filter(Boolean);
  return MBBS_TOPICS.filter(t=>(!mbbsCurrentYear||t.year===mbbsCurrentYear)&&(!mbbsCurrentSubject||t.subject===mbbsCurrentSubject)&&
    (mbbsCurrentSubject||mbbsFilterSubject==='all'||t.subject===mbbsFilterSubject)&&
    (mbbsStatus==='all'||mbbsProgress.done.includes(t.id)===(mbbsStatus==='done'))&&
    terms.every(term=>wordNormalize([t.title,t.module,subj(t.subject).name,...t.paragraphs,...t.remember,t.question,t.answer].join(' ')).includes(term)));
}
function renderMbbsResults(){
  const topics=filteredMbbsTopics(),groups=new Map();
  for(const topic of topics){const key=topic.subject+'|'+topic.module;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(topic);}
  $('#mbbs-result-count').textContent=topics.length+' matching topic'+(topics.length===1?'':'s');
  $('#mbbs-results').innerHTML=topics.length?[...groups.values()].map(group=>`<section class="mbbs-topic-group"><div class="section-title"><div><span class="eyebrow">${esc(mbbsYear(group[0].year).name)} · ${esc(subj(group[0].subject).name)}</span><h3>${esc(group[0].module)}</h3></div><a href="#mbbs/${group[0].year}/${group[0].subject}">Subject sequence →</a></div><div class="mbbs-topic-grid">${group.map(t=>`<article class="mbbs-topic-card"><div class="mbbs-topic-meta"><span>TOPIC ${String(t.order).padStart(2,'0')}</span><span class="${mbbsProgress.done.includes(t.id)?'mbbs-complete':''}">${mbbsProgress.done.includes(t.id)?'✓ Completed':'Not completed'}</span></div><h3><a href="#topic/${t.id}">${esc(t.title)}</a></h3><p>${esc(t.paragraphs[0])}</p><a class="mbbs-open-topic" href="#topic/${t.id}">Study this topic →</a></article>`).join('')}</div></section>`).join(''):'<div class="empty"><h2>No matching topics</h2><p>Try a shorter search or change the subject or status filter.</p><button class="btn secondary" data-action="mbbs-reset">Clear filters</button></div>';
}
function mbbsReading(t){
  const refs=LESSON_TEXTBOOK_LINKS[t.lesson]||[];
  const reference=SUBJECT_REFERENCES.find(r=>r.subject===t.subject);
  return `<section id="topic-reading" class="mbbs-topic-section"><h2>Build depth with source reading</h2><p>These links support the broader lesson related to this topic. Read the relevant section and compare its terminology, diagrams, and exceptions with your explanation.</p>${refs.length?`<div class="lesson-source-chapters">${refs.map(r=>{const b=textbook(r.book);return `<a href="#book/${b.id}/${r.page}"><strong>${esc(r.title)}</strong><span>${esc(b.shortTitle)} · PDF page ${r.page} · ${esc(b.level)}</span></a>`;}).join('')}</div>`:'<p>A dedicated local textbook chapter has not been mapped for this topic. Use the subject reference below alongside your college text.</p>'}${reference?`<p><a href="${esc(reference.url)}" target="_blank" rel="noopener">${esc(reference.title)} · ${esc(reference.publisher)} ↗</a></p>`:''}<div class="buttons"><button class="btn secondary" data-action="lesson" data-id="${t.lesson}">Open related concept lesson</button><a class="btn ghost" href="#study">Browse all source textbooks</a></div></section>`;
}
function mbbsTopicPage(id){
  const t=mbbsTopic(id);if(!t)return notFound();
  mbbsProgress.last=id;saveMbbsProgress();
  const y=mbbsYear(t.year),s=subj(t.subject),sequence=MBBS_TOPICS.filter(v=>v.subject===t.subject),position=sequence.indexOf(t),done=mbbsProgress.done.includes(id);
  const vocabulary=matchingMedicalWords([t.title,...t.paragraphs,...t.remember,t.question,t.answer,t.task].join(' '));
  main.innerHTML=`<article class="mbbs-topic-page"><nav class="mbbs-breadcrumbs" aria-label="Study location"><a href="#mbbs">MBBS years</a><span>/</span><a href="#mbbs/${y.id}">${esc(y.name)}</a><span>/</span><a href="#mbbs/${y.id}/${s.id}">${esc(s.name)}</a></nav><div class="page-head"><span class="eyebrow">${esc(y.phase)} · ${esc(t.module)} · TOPIC ${t.order} OF ${sequence.length}</span><h1>${esc(t.title)}</h1><p>Start with the explanation, test your recall, and leave with an account you can explain in your own words.</p></div>
    <div class="mbbs-topic-layout"><aside class="mbbs-topic-sidebar panel"><h2>Study this topic</h2><ol><li>Understand the explanation</li><li>Learn the key distinctions</li><li>Answer before revealing</li><li>Read and make your own notes</li></ol><p><strong>Your learning task</strong><br>${esc(t.task)}</p><label class="mbbs-completion-control"><input type="checkbox" data-mbbs-complete="${id}" ${done?'checked':''}><span>I have studied this topic</span></label><p class="fine">Self-tracked on this device. Revisit any topic whenever you need.</p><p><a href="#mbbs/${y.id}/${s.id}">See the full subject sequence →</a></p><a href="#words" target="_blank" rel="noopener">Open word guide in a new tab ↗</a></aside>
    <div class="mbbs-topic-content"><section id="topic-explanation" class="mbbs-topic-section"><span class="eyebrow">UNDERSTAND BEFORE MEMORIZING</span><h2>The explanation, step by step</h2><ol class="mbbs-explanation">${t.paragraphs.map((p,i)=>`<li><span class="mbbs-step-label">${['Start with the idea','Follow the mechanism','Connect the consequence'][i]}</span><p>${esc(p)}</p></li>`).join('')}</ol></section>
    <section class="mbbs-topic-section mbbs-key-points"><h2>Things to remember</h2><ul>${t.remember.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></section>
    <section class="mbbs-topic-section"><h2>Check your understanding</h2><p>Give your answer and its reason before revealing the explanation.</p><details class="mbbs-recall"><summary>${esc(t.question)}</summary><p>${esc(t.answer)}</p></details><div class="mbbs-practice"><h3>Put it on paper</h3><p>${esc(t.task)}</p><p class="fine">Compare your work with the explanation and source reading. Note the connection you missed, then try again without looking.</p></div></section>
    <details class="mbbs-topic-vocabulary"><summary>Words in this topic · ${vocabulary.length} glossary matches</summary><div class="word-grid">${wordCards(vocabulary)}</div><a href="#words" target="_blank" rel="noopener">Search all medical words ↗</a></details>
    ${mbbsReading(t)}<section class="mbbs-topic-section"><h2>Your study notes</h2><label for="mbbs-topic-notes">Your explanation, diagram notes, corrections, and questions</label><textarea id="mbbs-topic-notes" data-mbbs-note="${id}" rows="8" maxlength="6000" placeholder="Explain the mechanism in your own words. Add the source and page you read, a mistake you corrected, and a question to ask your teacher.">${esc(mbbsProgress.notes[id]||'')}</textarea><p id="mbbs-save-status" class="fine" role="status">${mbbsStorageError?'Storage unavailable. Changes last for this visit only; copy your notes before leaving.':'Notes and completion are saved on this device.'}</p></section></div></div>
    <nav class="mbbs-topic-navigation" aria-label="Topic sequence">${position>0?`<a class="btn secondary" href="#topic/${sequence[position-1].id}">← ${esc(sequence[position-1].title)}</a>`:`<a class="btn secondary" href="#mbbs/${y.id}/${s.id}">Back to ${esc(s.name)}</a>`}${position+1<sequence.length?`<a class="btn" href="#topic/${sequence[position+1].id}">${esc(sequence[position+1].title)} →</a>`:`<a class="btn" href="#mbbs/${y.id}">Continue with another subject →</a>`}</nav>${mbbsSourceNote()}</article>`;
}
document.addEventListener('input',e=>{
  if(e.target.id==='mbbs-search'){mbbsQuery=e.target.value.slice(0,200);renderMbbsResults();}
  const id=e.target.dataset?.mbbsNote;
  if(MBBS_TOPIC_IDS.has(id)){mbbsProgress.notes[id]=e.target.value.slice(0,6000);saveMbbsProgress();}
});
document.addEventListener('change',e=>{
  if(e.target.id==='mbbs-subject'){mbbsFilterSubject=e.target.value;renderMbbsResults();}
  if(e.target.id==='mbbs-status'){mbbsStatus=['all','todo','done'].includes(e.target.value)?e.target.value:'all';renderMbbsResults();}
  const id=e.target.dataset?.mbbsComplete;
  if(MBBS_TOPIC_IDS.has(id)){mbbsProgress.done=mbbsProgress.done.filter(v=>v!==id);if(e.target.checked)mbbsProgress.done.push(id);saveMbbsProgress();}
});
document.addEventListener('click',e=>{
  const button=e.target.closest('[data-action]');
  if(button?.dataset.action==='mbbs-reset'){mbbsQuery='';mbbsStatus='all';mbbsFilterSubject='all';mbbsHub(mbbsCurrentYear,mbbsCurrentSubject);}
});
