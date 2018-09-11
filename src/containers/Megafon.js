import React from 'react';
import {Provider} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import Menu from '../components/Menu';
import Store from '../Store';

import '../../styles/base/_main.sass';

function Megafon(props) {
    console.warn({props});
    return (
        <Provider store={Store}>
            <div className='wrapper'>
                <Menu/>
                <div>
                    {props.children}
                </div>
            </div>
        </Provider>
    );
}

export default withRouter(Megafon);
