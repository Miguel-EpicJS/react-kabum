
export const rotas = [
    {
        path: "/",
        component: MyAccount,
        title: "Detalhe do produto",
        isVisible: false,
    },
];

export const routesMenu = [
    {
        path: "/my-account",
        component: MyAccount,
        title: "Minha conta",
        isVisible: true,
    },
    {
        path: "/my-account/my-requests",
        component: MyAccount,
        title: "Meus pedidos",
        isVisible: true,
    },
    {
        path: "/my-account/favorites",
        component: MyAccount,
        title: "Favoritos",
        isVisible: true,
    },
    {
        path: "/faq",
        component: MyAccount,
        title: "Atendimento",
        isVisible: true,
    },
    {
        path: "/mostwanted",
        component: MyAccount,
        title: "Mais procurados",
        isVisible: true,
    },
    {
        path: "/justarrived",
        component: MyAccount,
        title: "Acabaram de Chegar",
        isVisible: true,
    },
    {
        path: "/offers/offers-of-the-day",
        component: MyAccount,
        title: "Ofertas do dia",
        isVisible: true,
    },
    {
        path: "/hotsite/prime",
        component: MyAccount,
        title: "Seja Prime Ninja",
        isVisible: true,
    },
    {
        path: "/hotsite/card",
        component: MyAccount,
        title: "Cartão KaBuM",
        isVisible: true,
    },
    {
        path: "/hotsite/pix",
        component: MyAccount,
        title: "Pix",
        isVisible: true,
    },
    {
        path: "/hotsite/tecmasters",
        component: MyAccount,
        title: "TecMasters",
        isVisible: true,
    },
];

function MyAccount()
{

}