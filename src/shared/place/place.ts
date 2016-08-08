export interface IPlace{
    geometry: {
        location: {
            lat: number;
            long: number;
        }
    };

    name: string;

    photos: {
        height: number;
        width: number;
        html_attributions: string[];
        photo_reference: string;
    }[];

    photo: string;

    rating: number;

}