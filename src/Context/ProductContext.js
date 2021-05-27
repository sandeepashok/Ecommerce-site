import { useState, useEffect, createContext } from 'react'
import axios from "axios";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {

  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const [filterState, setFilterState] = useState({
    sort: '',
    department: [],
    categories: [],
    brands: [],
    rating: 0,
    include: false
  })


  useEffect(() => {
    axios("https://learningexpress.sandeepashok.repl.co/products").then(
      (productList) => {
        setProducts(productList.data);
        setProductList(productList.data);
      }
    );
  }, []);


  const AllFiltersHandler = () => {

    // gender
    const productsCopy = [...productList]
    const filteredDepartment = productsCopy.filter(product => {
      return filterState.department.includes(product.gender)
    })
    let filteredDepartmentCopy = []
    Array.isArray(filteredDepartment) && filteredDepartment.length ? filteredDepartmentCopy = [...filteredDepartment] : filteredDepartmentCopy = [...productList]

    // console.log('filteredDepartmentCopy:', filteredDepartmentCopy)


    // category
    const filteredcategory = filteredDepartmentCopy.filter(product => {
      return filterState.categories.includes(product.category)
    })

    let filteredcategoryCopy = []
    Array.isArray(filteredcategory) && filteredcategory.length ? filteredcategoryCopy = [...filteredcategory] : filteredcategoryCopy = [...filteredDepartmentCopy]

    // console.log('filteredcategoryCopy:', filteredcategoryCopy)


    // brand
    const filteredBrand = filteredcategoryCopy.filter(product => {
      return filterState.brands.includes(product.brand)
    })

    let filteredBrandCopy = []
    Array.isArray(filteredBrand) && filteredBrand.length ? filteredBrandCopy = [...filteredBrand] : filteredBrandCopy = [...filteredcategoryCopy]

    // console.log("filteredBrandCopy", filteredBrandCopy)


    // rating

    const filteredRating = filteredBrandCopy.filter(product => {
      return product.rating >= filterState.rating
    })

    let filteredRatingCopy = []
    Array.isArray(filteredRating) && filteredRating.length ? filteredRatingCopy = [...filteredRating] : filteredRatingCopy = [...filteredBrandCopy]

    // console.log("filteredRatingCopy", filteredRatingCopy)

    //include out of stock
    let inStockElementsCopy = []
    const inStockElements = filteredRatingCopy.filter(product => product.inStock)
    filterState.include ? inStockElementsCopy = [...inStockElements] : inStockElementsCopy = [...filteredRatingCopy]

    // console.log(inStockElementsCopy)

    // sort by

    if (filterState.sort === 'asc') {
      setProducts([...(inStockElementsCopy.sort((a, b) => (a.price > b.price) ? 1 : -1))])
    } else if (filterState.sort === 'dec') {
      setProducts([...(inStockElementsCopy.sort((a, b) => (a.price < b.price) ? 1 : -1))])
    } else {
      setProducts([...inStockElementsCopy])
    }

    // console.log("sortedFilteredRatingCopy:", filteredRatingCopy)

  }

  useEffect(() => {
    AllFiltersHandler()
  }, [filterState])

  const clearAll = () => {
    setFilterState({
      sort: '',
      department: [],
      categories: [],
      brands: [],
      rating: 0,
      include: false
    })
  }

  const sortProductCards = (sortBy) => {

    const filterStateCopy = { ...filterState }
    filterStateCopy.sort = sortBy
    // console.log({ filterStateCopy })
    setFilterState(filterStateCopy)
    // console.log(filterState)


  }

  const departmentSelectionHandler = (department) => {
    const filterStateCopy = { ...filterState }
    if (!filterState.department.includes(department)) {
      filterStateCopy.department = [...filterState.department, department]
    }
    if (filterState.department.includes(department)) {
      const filteredDept = filterStateCopy.department.filter(dept => {
        return dept !== department
      })
      filterStateCopy.department = [...filteredDept]
    }
    // console.log({ filterStateCopy })
    setFilterState(filterStateCopy)
    // console.log(filterState)
  }

  const categorySelectionHandler = (category) => {
    const filterStateCopy = { ...filterState }
    if (!filterState.categories.includes(category)) {
      filterStateCopy.categories = [...filterState.categories, category]
    }
    if (filterState.categories.includes(category)) {
      const filteredcategory = filterStateCopy.categories.filter(categ => {
        return categ !== category
      })
      filterStateCopy.categories = [...filteredcategory]
    }
    // console.log({ filterStateCopy })
    setFilterState(filterStateCopy)
    // console.log(filterState)
  }


  const brandSelectionHandler = (brand) => {

    const filterStateCopy = { ...filterState }
    if (!filterState.brands.includes(brand)) {
      filterStateCopy.brands = [...filterState.brands, brand]
    }
    if (filterState.brands.includes(brand)) {
      const filteredBrand = filterStateCopy.brands.filter(attribute => {
        return attribute !== brand
      })
      filterStateCopy.brands = [...filteredBrand]
    }
    // console.log({ filterStateCopy })
    setFilterState(filterStateCopy)
    // console.log(filterState)
  }

  const showAccordingToRatingsHandler = (rating) => {
    const filterStateCopy = { ...filterState }
    filterStateCopy.rating = rating
    // console.log({ filterStateCopy })
    setFilterState(filterStateCopy)
    // console.log(filterState)
  }

  const includeOutOfStockDisplayHandler = (include) => {
    const filterStateCopy = { ...filterState }
    filterStateCopy.include = include
    // console.log({ filterStateCopy })
    setFilterState(filterStateCopy)
    // console.log(filterState)
  }

  return (
    <ProductContext.Provider value={{ products, productList, filterState, clearAll, sortProductCards, departmentSelectionHandler, categorySelectionHandler, brandSelectionHandler, showAccordingToRatingsHandler, includeOutOfStockDisplayHandler }}>
      {children}
    </ProductContext.Provider>
  )
}

