import React, { useState } from "react";
import TreeMenu from "react-simple-tree-menu";
import "../../node_modules/react-simple-tree-menu/dist/main.css";

const treeData = [
    {
        key: "mammal",
        label: "Mammal",
        url: "https://www.google.com/search?q=mammal",
        nodes: [
            {
                key: "canidae",
                label: "Canidae",
                url: "https://www.google.com/search?q=canidae",
                nodes: [
                    {
                        key: "dog",
                        label: "Dog",
                        url: "https://www.google.com/search?q=dog",
                        nodes: [],
                    },
                    {
                        key: "fox",
                        label: "Fox",
                        url: "https://www.google.com/search?q=fox",
                        nodes: [],
                    },
                    {
                        key: "wolf",
                        label: "Wolf",
                        url: "https://www.google.com/search?q=wolf",
                        nodes: [],
                    },
                ],
            },
        ],
    },
    {
        key: "reptile",
        label: "Reptile",
        url: "https://www.google.com/search?q=reptile",
        nodes: [
            {
                key: "squamata",
                label: "Squamata",
                url: "https://www.google.com/search?q=squamata",
                nodes: [
                    {
                        key: "lizard",
                        label: "Lizard",
                        url: "https://www.google.com/search?q=lizard",
                    },
                    {
                        key: "snake",
                        label: "Snake",
                        url: "https://www.google.com/search?q=snake",
                    },
                    {
                        key: "gekko",
                        label: "Gekko",
                        url: "https://www.google.com/search?q=gekko",
                    },
                ],
            },
        ],
    },
];

function Tree() {
    const [search_word, setsearch_word] = useState("");

    const inputHandelrForSearchWord = (e) => {
        let search_word = e.target.value;
        console.log(search_word);
        setsearch_word(search_word);
    };

    const excute_search_for_tree = () => {
        console.log("검색 버튼 클릭");
        // todo: 트리 메뉴에서 검색한 단어가 있는곳까지 열리게 만들기  
    };

    return (
        <>
            <br />
            <input type="text" value={search_word} onChange={inputHandelrForSearchWord} />
            <button onClick={excute_search_for_tree}>검색</button> <br />
            <TreeMenu data={treeData} hasSearch={false} />
        </>
    );
}

export default Tree;
