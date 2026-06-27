// script.js
const supabase = supabase.createClient(
    'https://hyjfojopykwtuogjvbdf.supabase.co', 
    'sb_publishable_e2OLtHBny_1llX2T_OeAKg_TuBDRyf4'
);

document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');

    signUpBtn.addEventListener('click', async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) alert("Chyba registrace: " + error.message);
        else alert("Registrace úspěšná!");
    });

    signInBtn.addEventListener('click', async () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) alert("Chyba přihlášení: " + error.message);
        else window.location.href = 'dashboard.html';
    });
});

