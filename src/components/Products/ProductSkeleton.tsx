const ProductSkeleton = () =>{
    return(
        <div className="relative animate-pulse">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md
            bg-gray-200 lg:aspect-none lg:h-80">
                <div className="h-full w-full bg-gray-200" />
            </div>
            <div className="mt-4 flex flex-col gap-3">

            </div>
        </div>
    )
}

export default ProductSkeleton