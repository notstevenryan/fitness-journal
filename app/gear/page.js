export default function Gear()  {
    return (
        <section className='bg-zinc-900 shadow-md p-4 
        space-y-4 max-w-5xl mx-auto rounded-md'> 

            <h2 className="text-3xl font-bold mb-4">👟 My Gear</h2>
            
            <div className="max-w-120 grid col-span-full gap-4 
            place-content-start bg-zinc-800 shadow-md p-4 
            space-y-2 rounded-md">
                <p className="text-lg font-semibold">Running Shoes</p>
                    <div>
                        Adidas Runfalcon 3
                    </div>
                <p className="text-lg font-semibold">Bike</p>
                    <div>
                        Kespor Storkfeather 2025
                    </div>

            </div>
        </section>
    )
}