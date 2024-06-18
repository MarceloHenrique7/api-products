ACCESS THE API AT: https://api-products-9nxx.onrender.com/products

For use this API use Postman or any software for make requests
access the link above!


Route for CREATE one product: https://api-products-9nxx.onrender.com/products
  send in the body of the request id, name, description, value
    ex: id: 100,
        name: "smartphone",
        description: "description of smartphone",
        value: "800"


Route for GET All products: https://api-products-9nxx.onrender.com/products
  You should see all products


Route for GET All products: https://api-products-9nxx.onrender.com/products/2
  You should see one product

Route for PUT one product: https://api-products-9nxx.onrender.com/products/2
    send in the body of the request name, description, value
    ex:
        name: "smartphone",
        description: "description of smartphone",
        value: "800"

Route for DELETE one product: https://api-products-9nxx.onrender.com/products/2
  The product should be deleted
