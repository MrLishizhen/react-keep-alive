import HomeView from './views/Home'
import FormView from './views/Form'
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'

import {
    KeepAlive,
    keepAliveTransfer
} from './keep-alive/index'

const AliveHomeView = keepAliveTransfer(HomeView, 'home')
const AliveFormView = keepAliveTransfer(FormView, 'form')

function App() {
    return (
        <BrowserRouter>
            <KeepAlive>
                <div>
                    <ul>
                        <li>
                            <Link to={'/'}>首页</Link>
                        </li>
                        <li>
                            <Link to={'/form'}>form页</Link>
                        </li>
                    </ul>

                    <Routes>
                        <Route path={'/'} element={<AliveHomeView/>}></Route>
                        <Route path={'/form'} element={<AliveFormView/>}></Route>
                    </Routes>


                </div>
            </KeepAlive>
        </BrowserRouter>
    );
}

export default App;
