const URL_API = "https://repo-movimientos.onrender.com/movimientos";

const getMovimientos = async () => {
  try {
    const { data } = await axios.get(URL_API);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const movimientos = await getMovimientos();
  const tableContainer = document.getElementById("table-container");

  let tableHtml = `
  <table>
  <tr class="table_cell" >
  <th class="table_header" >details</th>
  <th class="table_header" >quantity</th>
  <th class="table_header" >type</th>
  </tr>
  `;

  movimientos.forEach((movimiento) => {
    tableHtml += `
    <tr class="table_cell">
    <td class="table_body" >${movimiento.details}</td>
    <td class="table_body" >${movimiento.quantity}</td>
    <td class="table_body" >${movimiento.type}</td>
    </tr>
    `;
  });

  tableHtml += "</table>";
  tableContainer.innerHTML = tableHtml;
});
