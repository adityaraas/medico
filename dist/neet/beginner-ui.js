'use strict';
let wordQuery = '';
const BEGINNER_PREREQUISITES = {
  anatomy:[0,2,9],physiology:[3,4,5],biochemistry:[3,7,9],pathology:[0,5,10],
  pharmacology:[3,8,9],microbiology:[0,10,11],forensic:[11,12,1],community:[11,12,13],
  medicine:[5,6,11],surgery:[0,5,11],obgyn:[0,9,11],pediatrics:[0,7,10],
  ophthalmology:[2,9,11],ent:[2,6,9],orthopedics:[0,2,9],dermatology:[0,10,11],
  psychiatry:[9,11,12],radiology:[2,11,12],anesthesia:[5,6,9]
};
function wordCards(entries) {
  return entries.map(w=>'<details class="word-card"><summary>'+esc(w.term)+'</summary>'+
    (w.aliases.length>1?'<p class="fine">Also covers: '+w.aliases.slice(1).map(esc).join(', ')+'</p>':'')+
    '<p>'+esc(w.definition)+'</p></details>').join('');
}
function contextualWordHelp(text) {
  const entries=matchingMedicalWords(text);
  return '<details class="context-words"><summary>Words explained here · '+entries.length+' glossary matches</summary>'+wordCards(entries)+
    '<p><a href="#words">Search the full medical word guide</a></p></details>';
}
function lessonWords(l) {
  const b=BEGINNER_LESSONS[l.id],x=LESSON_EXPANSIONS[l.id]||{},g=SUBJECT_GUIDES[l.subject];
  return matchingMedicalWords([l.title,l.simple,...l.detail,l.q,l.a,...l.flow,...b.steps,b.example,b.remember,b.misconception,...Object.values(x),g.overview,g.task,...g.terms.flat()].join(' '));
}
function beginnerLesson(l) {
  const b=BEGINNER_LESSONS[l.id],words=lessonWords(l), prerequisites=BEGINNER_PREREQUISITES[l.subject]||[];
  return `<section class="beginner-lesson" aria-label="Beginner explanation">
    <div class="beginner-intro"><span class="eyebrow">START WITH CLASS 10 SCIENCE</span><h3>The idea, one step at a time</h3><p>Read the story, unpack unfamiliar words, then try explaining the idea without looking.</p>
    ${prerequisites.length?`<details class="before-you-start"><summary>Need a starting point? Review these basics</summary><div class="buttons">${prerequisites.map(i=>`<button class="btn secondary" data-action="lesson" data-id="foundation-${i}">${esc(lesson('foundation-'+i).title)}</button>`).join('')}</div></details>`:'<p class="fine">No medical background needed. Use the word guide whenever a term is unfamiliar.</p>'}</div>
    <ol class="beginner-steps">${b.steps.map(t=>`<li>${esc(t)}</li>`).join('')}</ol>
    <section class="beginner-example"><span class="eyebrow">MAKE IT CONCRETE</span><h3>An example to think through</h3><p>${esc(b.example)}</p></section>
    <div class="beginner-takeaways"><section><h3>Things to remember</h3><p>${esc(b.remember)}</p></section><section><h3>A common mix-up</h3><p>${esc(b.misconception)}</p></section></div>
    <details class="lesson-word-guide"><summary>Unpack the words in this lesson · ${words.length} entries</summary><label for="lesson-word-search">Find a word or abbreviation</label><input id="lesson-word-search" type="search" placeholder="Try a word from the lesson…" autocomplete="off"><p id="lesson-word-count" class="fine" role="status">${words.length} entries</p><div id="lesson-word-results" class="word-grid">${wordCards(words)}</div><a href="#words">Open the complete word guide →</a></details>
    <section class="beginner-recall"><h3>Pause and explain</h3><p>Say the answer aloud before opening it. Include the reason, not just the name.</p><details><summary>${esc(l.q)}</summary><p><strong>${esc(l.a)}</strong></p><p>${esc(l.simple)}</p><p>${esc(b.steps.join(' '))}</p></details><details><summary>Can you explain this lesson in 30 seconds?</summary><p>${esc(b.steps.join(' '))}</p><p><strong>Finish with:</strong> ${esc(b.remember)}</p></details></section>
    <p class="fine">These are starting explanations. Use the next-level notes for technical detail and the source chapters for depth.</p>
  </section>`;
}
function wordMatches(entries,query) {
  const terms=wordNormalize(query).trim().split(/\s+/).filter(Boolean);
  return entries.filter(w=>terms.every(t=>wordNormalize(w.aliases.join(' ')+' '+w.definition).includes(t)));
}
function wordGuideResults() {
  const found=wordMatches(MEDICAL_WORDS,wordQuery);
  $('#word-count').textContent=found.length+' of '+MEDICAL_WORDS.length+' entries';
  $('#word-results').innerHTML=found.length?wordCards(found):'<div class="empty"><h2>No matching definition yet</h2><p>Try a shorter word or an abbreviation. This guide covers core course vocabulary; it is not a complete medical dictionary.</p><a href="https://medlineplus.gov/medwords/" target="_blank" rel="noopener">Explore medical language at MedlinePlus ↗</a></div>';
}
function wordGuide() {
  main.innerHTML=`<article class="word-guide"><div class="page-head"><span class="eyebrow">MEDICINE IN ORDINARY WORDS</span><h1>Big words. Clear meanings.</h1><p>Search ${MEDICAL_WORDS.length} entries covering body parts, processes, diseases, tests, and abbreviations. Open a word to see its meaning. Related terms are grouped and distinguished together.</p></div>
  <section class="panel word-building"><h2>How to unpack a medical word</h2><p>A root often points to a body part; a prefix or ending adds a clue. <strong>Cardio</strong> relates to the heart, <strong>neuro</strong> to nerves, and <strong>-itis</strong> to inflammation. Hepatitis means liver inflammation; the name alone does not tell you its cause.</p><p>Word parts are clues, so check the full meaning. Learn the ordinary-language idea first, then attach its medical name.</p><a href="https://medlineplus.gov/medwords/" target="_blank" rel="noopener">Medical word tutorial · MedlinePlus ↗</a></section>
  <div class="word-search-box"><label for="word-search">Search a term, abbreviation, or meaning</label><input type="search" id="word-search" value="${esc(wordQuery)}" placeholder="Try ATP, inflammation, kidney, or blood…" autocomplete="off"><p id="word-count" role="status" class="fine"></p></div><div id="word-results" class="word-grid"></div>
  <section class="panel word-sources"><h2>Keep learning in context</h2><p>These original course definitions are learning aids. Some terms have several meanings; use the meaning that fits the sentence. Original textbooks and source questions retain their own wording and may contain additional specialist terms.</p><div class="buttons"><a class="btn" href="#subject/foundation">Start the foundation lessons</a><a class="btn secondary" href="#sources">Course sources and scope</a></div><p><a href="https://openstax.org/books/anatomy-and-physiology-2e/pages/1-introduction" target="_blank" rel="noopener">OpenStax anatomy and physiology ↗</a> · <a href="https://medlineplus.gov/medwords/" target="_blank" rel="noopener">MedlinePlus medical language ↗</a></p></section></article>`;
  wordGuideResults();
}
document.addEventListener('input',e=>{
  if(e.target.id==='word-search'){wordQuery=e.target.value.slice(0,200);wordGuideResults();}
  if(e.target.id==='lesson-word-search'&&dialogLesson){
    const all=lessonWords(dialogLesson),found=wordMatches(all,e.target.value.slice(0,200));
    $('#lesson-word-count').textContent=found.length+' of '+all.length+' entries';
    $('#lesson-word-results').innerHTML=found.length?wordCards(found):'<p>No match here. Try the <a href="#words">complete word guide</a>.</p>';
  }
});
