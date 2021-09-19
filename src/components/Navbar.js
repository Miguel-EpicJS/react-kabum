import { useContext } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { MyContext } from "../context/context";
import { routesMenu } from "../router";

export function Navbar() {
    // @todo esses produtos precisam vir do "portal"
    // const { produtosDoCarrinho } = useContext(MyContext);

    return (
        <BrowserRouter>
            <nav>
                <div>
                    <button>
                        <span></span>
                    </button>
                    <div>
                        <ul>
                            {routesMenu
                                .filter((route) => route.isVisible)
                                .map((route) => {
                                    return (
                                        <li>
                                            <Link
                                                aria-current="page"
                                                to={route.path}
                                            >
                                                {route.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                    <span>{[].length} produto(s)</span>
                </div>
            </nav>
        </BrowserRouter>);
}   