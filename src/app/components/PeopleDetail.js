import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PeopleDetail = ({ people }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [vehicleData, setVehicleData] = useState([]);
    const [starshipData, setStarshipData] = useState([]);
    const [filmData, setFilmData] = useState([]);

    useEffect(() => {
        const fetchData = async (urls, setData, errorMessage) => {
            try {
                const responses = await Promise.all(urls.map(url => axios.get(url)));
                const data = responses.map(response => response.data);
                setData(data);
            } catch (error) {
                console.error(errorMessage, error);
            }
        };

        if (people) {
            const vehicleUrls = people?.vehicles || [];
            const starshipUrls = people?.starships || [];
            const filmUrls = people?.films || [];

            Promise.all([
                fetchData(vehicleUrls, setVehicleData, "Error fetching vehicle data:"),
                fetchData(starshipUrls, setStarshipData, "Error fetching starship data:"),
                fetchData(filmUrls, setFilmData, "Error fetching film data:"),
            ]).finally(() => setIsLoading(false));
        }
    }, [people]);

    return (
        <div className="px-10 mt-5">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>: {people?.name}</td>
                            </tr>
                            <tr>
                                <td>Birthdate</td>
                                <td>: {people?.birth_year}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>: {people?.gender}</td>
                            </tr>
                            <tr>
                                <td>Hair Color</td>
                                <td>: {people?.hair_color}</td>
                            </tr>
                            <tr>
                                <td>Skin Color</td>
                                <td>: {people?.skin_color}</td>
                            </tr>
                            <tr>
                                <td>Vehicles</td>
                                <td>: {vehicleData?.map((vehicle, index, array) => (
                                    <span key={index}>{vehicle?.name}{index !== array.length - 1 ? ', ' : ''}</span>
                                ))}</td>
                            </tr>
                            <tr>
                                <td>Starships</td>
                                <td>: {starshipData?.map((starship, index, array) => (
                                    <span key={index}>{starship?.name}{index !== array.length - 1 ? ', ' : ''}</span>
                                ))}</td>
                            </tr>
                            <tr>
                                <td>Films</td>
                                <td>: {filmData?.map((film, index, array) => (
                                    <span key={index}>{film?.title}{index !== array.length - 1 ? ', ' : ''}</span>
                                ))}</td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default PeopleDetail;
