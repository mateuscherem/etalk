const Q=[
{e:'Rotina',t:'Olhando para a nossa rotina nas últimas semanas, quais situações ou processos mais ajudaram e quais mais atrapalharam o seu trabalho diário?'},
{e:'Individual',t:'O que eu posso começar a fazer (ou mudar) na minha rotina para melhorar o clima e a colaboração no nosso time?'},
{e:'Individual',t:'O que eu posso fazer para me comunicar de forma mais transparente com meus colegas e liderança quando algo não estiver indo bem?'},
{e:'Equipe',t:'Qual regra, processo ou combinado o time pode ajustar entre si para reduzir a sobrecarga e o estresse na sprint?'},
{e:'Equipe',t:'De que forma a equipe pode se organizar melhor para que ninguém se sinta isolado ou sobrecarregado ao enfrentar problemas difíceis?'},
{e:'Liderança',t:'O que o líder pode começar a fazer ou parar de fazer para dar mais clareza, autonomia e apoio ao time?'},
{e:'Liderança',t:'Qual é o principal obstáculo no dia a dia que você precisa que o líder remova para que seu trabalho flua melhor?'}];
const VQ='Das propostas apresentadas, escolha as 2 ações que trarão o maior impacto positivo imediato para o bem-estar e a produtividade da nossa equipe nas próximas semanas.';
const app=document.getElementById('app');
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ls={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
