import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./router/Router";

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50">
                <Header />
                <main className="main-content">
                    <Router />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}