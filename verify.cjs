const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const elements=new Map();
const handlers={};
const registered=new Map();
function element(key){if(!elements.has(key))elements.set(key,{innerHTML:'',textContent:'',style:{},open:false,classList:{toggle(){}},addEventListener(){},showModal(){this.open=true;},close(){this.open=false;},focus(){},isConnected:true});return elements.get(key);}
const document={querySelector:element,querySelectorAll:()=>[],addEventListener:(n,fn)=>handlers[n]=fn,activeElement:element('active'),modelContext:{registerTool:t=>registered.set(t.name,t)}};
const location={hash:'#catalog'};
let stored='';
const context=vm.createContext({document,location,localStorage:{getItem:()=>null,setItem:(k,v)=>stored=v},window:{scrollTo(){},scrollY:0,addEventListener(){}},setTimeout:()=>0,clearTimeout(){},AbortController,console});
vm.runInContext(fs.readFileSync('dist/curriculum.js','utf8'),context);
vm.runInContext(fs.readFileSync('dist/app.js','utf8'),context);
const run=s=>vm.runInContext(s,context);
assert.equal(run('SUBJECTS.length'),19);
assert.equal(run('ALL_LESSONS.length'),128);
assert.equal(run('DAYS.length'),180);
assert.equal(run('new Set(ALL_LESSONS.map(l=>l.id)).size'),128);
assert.equal(run('DAYS.every(d=>d.lessons.length>0&&d.lessons.every(id=>lesson(id)))'),true);
assert.equal(run('ALL_LESSONS.every(l=>l.detail.length===3&&l.flow.length===3&&l.q&&l.a)'),true);
for(const id of run('ALL_SUBJECTS.map(s=>s.id)')){run(`subjectPage('${id}')`);assert.match(element('#main').innerHTML,/Start learning/);}
for(const id of run('ALL_LESSONS.map(l=>l.id)')){run(`openLesson('${id}')`);assert.ok(element('#lesson-content').innerHTML.includes('IN EVERYDAY WORDS'));run("dialogTab='visual';");assert.match(run('lessonPanel()'),/CONCEPT FLOW/);run("dialogTab='quiz';");assert.match(run('lessonPanel()'),/data-correct="true"/);run('closeDialog()');}
run("location.hash='#plan';plan();");assert.match(element('#plan-days').innerHTML,/DAY/);
run('toggleDone(1)');assert.equal(run('saved.done.includes(1)'),true);
run('toggleDone(1)');assert.equal(run('saved.done.includes(1)'),false);
run("saved.start='2026-01-01'");assert.equal(run('dateForDay(2)'),'2 Jan');
run("planFilter='revision';planPage=0;renderDays()");assert.equal(run('filteredDays().length'),14);
run('openDay(180)');assert.match(element('#lesson-content').innerHTML,/Final recall/);run('closeDialog()');
run("cardSubject='anatomy';cardIndex=0;flashcards()");assert.match(element('#flash-content').innerHTML,/Card 1 of 6/);
run('cardFlipped=true;renderFlash()');assert.match(element('#flash-content').innerHTML,/Epithelium/);
run("mapSubject='physiology';maps()");assert.match(element('#map-detail').innerHTML,/Homeostasis/);
for(const id of run('Object.keys(DIAGRAMS)')){run(`diagramType='${id}';renderDiagram(3)`);assert.match(element('#diagram-view').innerHTML,/aria-live="polite"/);}
assert.equal(registered.size,2);
assert.equal(registered.get('get_study_outline').execute().days,180);
(async()=>{const tool=registered.get('open_study_day');const r=await tool.execute({day:42});assert.equal(r.day,42);assert.equal(element('#lesson-dialog').open,true);await assert.rejects(()=>tool.execute({day:0}));assert.equal(JSON.parse(stored).done.length,0);console.log('PASS: 19 subject pages, 128 lesson/flow/quiz renders, 180 valid day references, progress, dates, flashcards, 5 diagrams and structured action logic. DOM simulation only; browser layout and WebMCP runtime not verified.');})().catch(e=>{console.error(e);process.exitCode=1;});
