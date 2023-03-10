import { updateProduct } from '../redux/productsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../redux/store'

export function Products() {
	const products = useSelector((state: RootState) => state.products.value)
	const dispatch = useDispatch()

	const navigate = useNavigate()

	return <section className="w-96">
		<h3 className="py-4 text-2xl font-bold">Products</h3>
		<section className="flex flex-col gap-4">
			{
				products.map(product => <section key={product.id} className="pb-2 shadow-md bg-slate-50 rounded-lg">
					<section className="w-full h-50 flex justify-center items-center cursor-pointer rounded-lg overflow-hidden" onClick={() => navigate(`/product/${product.id}`)}>
						<img className="w-full" src={product.imageURL} alt={product.description} />
					</section>
					<section className="flex gap-1 px-2 pt-1">
						<span>{`${product.name}`}</span>
						<span className="text-rose-500">{`$${product.price} * ${product.quantity} = $${(product.price * product.quantity).toFixed(2)}`}</span>
					</section>
					<p className="px-2 pt-1 truncate">{product.description}</p>
					<section className="flex gap-2 justify-end px-2 pt-2">
						<button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-slate-50 py-1 px-2 border border-blue-500 hover:border-transparent rounded" onClick={() => dispatch(updateProduct({ id: product.id, quantity: 0 }))}>Clear</button>
						<button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-slate-50 py-1 px-2 border border-blue-500 hover:border-transparent rounded" onClick={() => dispatch(updateProduct({ id: product.id, quantity: product.quantity - 1 }))}>-</button>
						<button className="bg-blue-500 hover:bg-blue-700 text-slate-50 py-1 px-2 rounded" onClick={() => dispatch(updateProduct({ id: product.id, quantity: product.quantity + 1 }))}>+</button>
					</section>
				</section>)
			}
		</section>
	</section>
}