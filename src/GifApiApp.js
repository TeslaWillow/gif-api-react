import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApiApp = () => {

    // const categories = ['One punch', 'hxh', 'dororo'];
    const [categories, setCategories] = useState(['HxH']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'FREE!'] );
    // };

    return (
        <>
            <h2>Gif API</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
            { 
                categories.map( categorie => 
                    <GifGrid 
                        key={ categorie }
                        category={ categorie }
                    />
                ) 
            }
            </ol>
        </>
    )
}