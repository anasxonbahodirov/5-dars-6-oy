const url = 'https://fakestoreapi.com/products?limit=10';
    const productsWrapper = document.querySelector('.products');

    const getData = async () => {
        try {
            const response = await fetch(url);
            const products = await response.json();
            if (!response.ok) {
                throw new Error(response.message);
            }
            return products;

        } catch (err) {
            return err.message;
        }
    }

    const drawProducts = async () => {
        const products = await getData();
        for (let product of products) {
            productsWrapper.innerHTML += 
     `  <div class='card'>
         <img class='name' src='${product.image}'/>    
          <p class='price'>${product.id}</p>
          <p class='price'>${product.title}</p>
          <p class='price'>${product.price}</p>
          <p class = 'price'>${product.category}</p>
       
       
         
        </div>`
        }
    }

    drawProducts();