import React from "react";
import Information from "./Information";

const imageSize = "portrait_uncanny";

const Row = ({ element, title }) => {
  console.log(element.copyright)
  return (
    <div>
      {/* <h1 className='p-3 h-full w-full text-center mt-4 font-bold text-[3vmin]'>{title}</h1> */}

      <div className="flex flex-wrap justify-center w-full">
        {element.data &&
          element.data.results.map((x) => (
         
            <Information
              key={x.id}
              id={x.id}
              thumbnail={`${x.thumbnail.path}/${imageSize}.${x.thumbnail.extension}`}
              title={x.name}
              description = {x.description}
              comics = {x.series.name}
              copyright = {element.attributionText}

            />
           
          ))}
          
      </div>
      <div className="">
      <h1>{element.copyright}</h1>  
      </div>
    </div>
    
  ); 
  
};

export default Row;
