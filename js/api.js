const url = 'https://gradistore-spi.herokuapp.com/products/all';

export  const apiQuery = async () =>{
  try {
    const response = await fetch(url);
    const data = await response.json();
    return(data.products.nodes);
  } catch (error) {
    console.log(error);
  }
}
