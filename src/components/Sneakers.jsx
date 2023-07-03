import React, {useState, useEffect } from 'react'
import"./sneakers.css";
import { InfinitySpin } from 'react-loader-spinner';
// template sneakers
// loadingstate

const Sneakers = () => {
    const url = "https://example-data.draftbit.com/sneakers?_limit=10";
    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setIsLoading(false);
        setProducts(data);
    };

    useEffect(() => {
      fetchData();
    }, []);


    if (isLoading) {
      return <InfinitySpin 
  width='200'
  color="#4fa94d"
/>;
    }

    return (

      <div>
        {products.map((product) => {
          const {
            id,
            title,
            brand,
            retailPrice,
            media: { smallImageUrl },
          } = product;


          return (
            <div key={id}>
              <img src={smallImageUrl} alt={title} />
              <h3> {brand} </h3>
              <h4>{retailPrice} </h4>
              <h3>{title} </h3>
              </div>
          );
        })}
      </div>
    );
    





    fetchData();
//   return (
//     <div>
//       <div className="delivery">...</div>
//       <div className="navbar">...</div>
//       <main>
//         <section className="maincontainer">
//           <div>
//             <h3>Beautiful Sneakers</h3>
//             <h2>Lovely sneakers at affordable Prices</h2>
//             <button>Shop Now</button>
//           </div>
//           <div>
//             <img
//               src="https://w7.pngwing.com/pngs/323/773/png-transparent-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-sneakers-thumbnail.png"
//               alt="Sneakers"
//             />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
  };

export default Sneakers;