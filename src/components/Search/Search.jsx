import React from 'react';
import {Form} from 'react-bootstrap';
import iconSearch from './search.svg';
import style from'./style.module.css'

function Search() {
    return (
        <div>
            <Form className={style.search}>
                <Form.Control
                    type="search here"
                    placeholder="  Search here"
                    aria-label="Search"
                    className={style.rounded}
                />
                <img src={iconSearch} alt="search" className={style.styleIcon} />
            </Form>
        </div>
    )
}

export default Search