import React from "react";
import Information from "./Information";

const imageSize = "portrait_uncanny";

const Row = ({ element, title }) => {
 
  return (
    <div className="w-full h-full">
      {/* <h1 className='p-3 h-full w-full text-center mt-4 font-bold text-[3vmin]'>{title}</h1> */}

      <div className="flex flex-wrap justify-center w-full h-full">
        {element.data &&
          element.data.results.map((x) => (
         
            <Information
              key={x.id}
              id={x.id}
              thumbnail={`${x.thumbnail.path}/${imageSize}.${x.thumbnail.extension}`}
              title={x.name}
              description = {x.description}
              // comics = {x.stories.items.name}
              copyright = {element.attributionText}

            />
            
          ))}
      
      </div>
      <div className="mt-10 pr-5">
     <h1 className="text-white text-right">{element.copyright}</h1>  
     </div>
    </div>
    
  ); 
  
};

export default Row;
