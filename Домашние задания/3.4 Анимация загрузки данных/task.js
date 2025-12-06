let loader = document.getElementById('loader');
let items = document.getElementById('items');
let url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

let cached = localStorage.getItem('valutes');

if (cached) {
  render(JSON.parse(cached));
}

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    loader.classList.remove('loader_active');

    let valutes = data.response.Valute;

    localStorage.setItem('valutes', JSON.stringify(valutes));

    items.innerHTML = '';
    render(valutes);
  });

function render(valutes) {
  for (let code in valutes) {
    let v = valutes[code];
    let item = createItem(v.CharCode, v.Value);
    items.appendChild(item);
  }
}

function createItem(code, value) {
  let item = document.createElement('div');
  item.classList.add('item');

  let codeEl = document.createElement('div');
  codeEl.classList.add('item__code');
  codeEl.textContent = code;

  let valueEl = document.createElement('div');
  valueEl.classList.add('item__value');
  valueEl.textContent = value;

  let currencyEl = document.createElement('div');
  currencyEl.classList.add('item__currency');
  currencyEl.textContent = 'руб.';

  item.appendChild(codeEl);
  item.appendChild(valueEl);
  item.appendChild(currencyEl);

  return item;
}
