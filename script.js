document.addEventListener('DOMContentLoaded', function() {
    const addItemButton = document.getElementById('add-item');
    const calcularTotalButton = document.getElementById('calcular-total');
    const resetAll = document.getElementById('reset-all');
    const itemsContainer = document.getElementById('items-container');
    const resultado = document.getElementById('resultado');

    addItemButton.addEventListener('click', function() {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <input type="number" class="quantidade" placeholder="Qtd">
            <input type="text" class="nome" placeholder="Nome do item">
            <input type="number" class="preco" placeholder="Preço">
        `;
        itemsContainer.appendChild(newItem);
    });

    calcularTotalButton.addEventListener('click', function() {
        let total = 0;
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            const quantidade = item.querySelector('.quantidade').value;
            const preco = item.querySelector('.preco').value;
            total += quantidade * preco;
        });
        resultado.textContent = `Total: R$ ${total.toFixed(2)}`;
    });

    resetAllButton.addEventListener('click', function() {
        itemsContainer.innerHTML = '';
        resultado.textContent = '';
    });
});
