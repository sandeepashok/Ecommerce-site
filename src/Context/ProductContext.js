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
    axios("https://fitmerch-api.onrender.com/products").then(
      (productList) => {
        setProducts(productList.data);
        setProductList(productList.data);
      }
    );
  }, []);


  const AllFiltersHandler = () => {
    // gender
    const productsCopy = [...productList]
    let filteredDepartment = filterState.department.length > 0 ? productsCopy.filter(product => {
      return filterState.department.includes(product.gender)
    }) : productsCopy

    // category
    const filteredcategory = filterState.categories.length > 0 ? filteredDepartment.filter(product => {
      return filterState.categories.includes(product.category)
    }) : filteredDepartment

    // brand
    const filteredBrand = filterState.brands.length > 0 ? filteredcategory.filter(product => {
      return filterState.brands.includes(product.brand)
    }) : filteredcategory

    // rating
    const filteredRating = filterState.rating ? filteredBrand.filter(product => {
      return product.rating >= filterState.rating
    }) : filteredBrand

    //include out of stock
    let inStockElementsCopy = []
    const inStockElements = filteredRating.filter(product => product.inStock)
    filterState.include ? inStockElementsCopy = [...inStockElements] : inStockElementsCopy = [...filteredRating]

    // sort by
    if (filterState.sort === 'asc') {
      setProducts([...(inStockElementsCopy.sort((a, b) => (a.price > b.price) ? 1 : -1))])
    } else if (filterState.sort === 'dec') {
      setProducts([...(inStockElementsCopy.sort((a, b) => (a.price < b.price) ? 1 : -1))])
    } else {
      setProducts([...inStockElementsCopy])
    }

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

