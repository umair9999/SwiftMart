import React, { useEffect, useState } from "react";

function Crud() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [id, setId] = useState(0)
  const [isupdate,setIsUpdate] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts


  const handleDelete = (id) => {
    const dt = products.filter(product => product.id !== id);
    setProducts(dt);
      }

  const handleEdit = (id) => {
    const dt = products.filter(product => product.id === id)
    if(dt !== undefined)
    {
      setIsUpdate(true)
      setId(id);
      setCategory(dt[0].category)
      setTitle(dt[0].title)
      setPrice(dt[0].price)
    }
  }
    
  const handleClear = () =>{
    setId(0);
    setCategory('')
    setTitle('')
    setPrice('')
    setIsUpdate(false)
}

const handleUpdate = () =>{
  const index = products.map((product) => {
    return product.id
  }).indexOf(id);

  const dt = [...products];
  dt[index].category = category;
  dt[index].title = title;
  dt[index].price = price;

  setProducts(dt);
  handleClear();

}
     
const handleSave = (e) => {
  e.preventDefault();
  const dt = [...products];
  const newObject = {
    id: products.length + 1,
    category: category,
    title: title,
    price: price
  }
  dt.push(newObject)
  setProducts(dt)
}
   


  return (
    <div className="APP">
      <h1 className="text-center p-8 text-[40px] font-bold	">FakeStore Crud App</h1>
      <div className="flex flex-col">
        <div className="flex justify-center	">
          <div className="flex">
            <label htmlFor="" className="px-6 py-3 text-start  font-medium text-gray-500 uppercase dark:text-neutral-500">Category</label>
            <input type="text" className="w-[200px] mr-[20px] appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)} value={category} />
          </div>
          <div className="flex">
            <label htmlFor="" className="px-6 py-3 text-start font-medium text-gray-500 uppercase dark:text-neutral-500" >Title</label>
            <input type="text" className="w-[500px] appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} value={title}  />
          </div>
          <div className="flex">
            <label htmlFor="" className="px-6 py-3 text-start  font-medium text-gray-500 uppercase dark:text-neutral-500">Price</label>
            <input type="text" className="w-[130px] mr-[20px] appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)} value={price}/>
          </div>
          <div>
          {
              !isupdate ?
              <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={(e)=> handleSave(e)}>Save</button>
              :
              <button className="bg-green-500 mt-[3px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={()=> handleUpdate()}>Update</button>
            }
            
          <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> handleClear()}>Clear</button>
          </div>
        </div>
        <div className="-m-1.5 overflow-x-auto mt-12">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full  divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start  font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start font-medium text-gray-500 uppercase dark:text-neutral-500"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="inline-flex items-center gap-x-2  font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {
                    products.map((product, index) => {
                    return (
                      <tr key={index}>
   
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-800 dark:text-neutral-200">
                          {product.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-800 dark:text-neutral-200">
                          {product.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-800 dark:text-neutral-200">
                          {product.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-gray-800 dark:text-neutral-200">
                          ${product.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end  font-medium">
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={()=>handleEdit(product.id)}
                         >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={()=>handleDelete(product.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crud;
