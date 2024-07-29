import { Title, Container, TopBar, Filters, ProductsGroupList } from '@/components/shared';

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="All Pizzas" size="lg" className="font-extrabold" />
            </Container>

            <TopBar />

            <Container className="mt-10 pb-14">
                <div className="flex gap-[60px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                title="Pizzas"
                                items={[
                                    {
                                        id: 1,
                                        name: 'Pizza 1',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 100,
                                        items: [{ price: 100 }],
                                    },
                                    {
                                        id: 2,
                                        name: 'Pizza 1',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 100,
                                        items: [{ price: 100 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Pizza 1',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 100,
                                        items: [{ price: 100 }],
                                    },
                                    {
                                        id: 4,
                                        name: 'Pizza 1',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 100,
                                        items: [{ price: 100 }],
                                    },
                                    {
                                        id: 5,
                                        name: 'Pizza 1',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 100,
                                        items: [{ price: 100 }],
                                    },
                                    {
                                        id: 6,
                                        name: 'Pizza 1',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 100,
                                        items: [{ price: 100 }],
                                    },
                                ]}
                                categoryId={1}
                            />
                            <ProductsGroupList
                                title="Breakfast "
                                items={[
                                    {
                                        id: 1,
                                        name: 'Pizza 1',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 100,
                                        items: [{ price: 100 }],
                                    },
                                    {
                                        id: 2,
                                        name: 'Pizza 1',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 100,
                                        items: [{ price: 100 }],
                                    },
                                    {
                                        id: 3,
                                        name: 'Pizza 1',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 100,
                                        items: [{ price: 100 }],
                                    },
                                    {
                                        id: 4,
                                        name: 'Pizza 1',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 100,
                                        items: [{ price: 100 }],
                                    },
                                    {
                                        id: 5,
                                        name: 'Pizza 1',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 100,
                                        items: [{ price: 100 }],
                                    },
                                    {
                                        id: 6,
                                        name: 'Pizza 1',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EF438E93884BFEBFE79D11095AE2D4.avif',
                                        price: 100,
                                        items: [{ price: 100 }],
                                    },
                                ]}
                                categoryId={2}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
