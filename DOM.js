/* script.js */
function showExplanation(id) {
    const explanation = document.getElementById(id);
    if (explanation.classList.contains('hidden')) {
        explanation.classList.remove('hidden');
    } else {
        explanation.classList.add('hidden');
    }
}
