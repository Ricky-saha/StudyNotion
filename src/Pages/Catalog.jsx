import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'
import { useParams } from 'react-router'
import { apiConnector } from '../services/apiConnector';
import { categories } from '../services/apis';
import getCatalogPageData from '../services/operations/pageAndComponentsData';








const Catalog = () => {

const {catalogName} = useParams();
const [catalogPageData, setCatalogPageData] = useState(null);
const [categoryId, setCategoryId] = useState("");

//fetch all category 
    useEffect(()=>{
        const getCategories = async()=>{
            const res = await apiConnector("GET", categories.CATEGORIES_API)
            const category_id 
            = (res.data.data.filter((item)=>item.name=== Catalog.catalog)[0]);
            setCategoryId(category_id)
        }
        getCategories()
    },[catalogName])


    useEffect(()=>{

        const getCategoryDetails = async ()=>{
            try{
                const res = await getCatalogPageData(categoryId)
                console.log("Printing res", res)
                setCatalogPageData(res)
            }
            catch(error){
                console.log(error);
            }
        }

         getCategoryDetails()

    },[categoryId])

  return (
    <div className="text-white">
     
        <div>
            <p>{`Home / Catalog / `}
                <span>
                    {
                        catalogPageData?.data?.selectedCategory?.name
                    }
                </span>
            </p>
            <p> {catalogPageData?.data?.selectedCategory.name}</p>
            <p> {catalogPageData?.data?.selectedCategory.description}</p>
            <p></p>
        </div>

        <div>

            {/* section 01 */}
            <div>

                <div className="flex gap-x-3">
                    <p>Most Popular</p>
                    <p>New</p>
                </div>

                {/* <CourseSlider/> */}

            </div>

            {/* section 02 */}
            <div>
                <p>Top Courses</p>

                <div>
                    {/* <CourseSlider/> */}
                </div>

            </div>

            {/* section 03 */}
            <div>
                <p>Frequently Brought Together</p>
            </div>

        </div>

        <Footer/>

    </div>
  )
}

export default Catalog
