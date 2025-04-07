const btn = document.getElementById('btn');
const input = document.getElementById('input-text');
const divSaludo = document.getElementById('saludo');

const fetchData = async () => {

  try {
    if (input.value === "") {
      alert("El input no puede estar vacio")
      return;
    }

    const response = await fetch(`http://localhost:3000/saludo/${input.value}`);
    const data = await response.json();

    console.log(data);

    const saludo = document.createElement('h2');
    saludo.innerText = data.nombre;

    divSaludo.appendChild(saludo);
  } catch (error) {
    throw new Error(error);
  }
};

btn.addEventListener('click', fetchData);