import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
    return (
        <div className="App">
            <h1 className="text-success">GeeksforGeeks</h1>
            <div className="bg-info p-5">
                <p className="">
                    This is example for using button with
                    bootstrap styling
                </p>
                <a
                    className="btn btn-primary"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    Bootstrap button
                </a>
            </div>
        </div>
    );
}
