import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface Songs {
    id: number;
    title: string;
    audio: string;
    artist: string;
    category_id: number;
    category_name: string;
    profile_pics: string;
}
const SongHome: React.FC = () => {
    const [song, setSong] = useState<Songs[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost/joshvibes/PHP_Backend/get_allsong.php")
            .then((res) => {
                console.log("Fetched songs:", res.data);
                setSong(res.data);
            })
            .catch((err) => console.error("Error fetching songs", err));
    }, []);
    
    return (

    );
};

export default SongHome;