import { Campaign } from "types/global";

var campaings: Array<Campaign> = [
    {
        '_id': '121',
        'name': 'Brewery',
        'descrition': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil',
        'remainingDays': 28,
        'currentAmountRaised': 96000,
        'image': '/assets/brewery.jpg',
        'fundingPercent': 120,
        'hasControls': true
    },
    {
        '_id': '122',
        'name': 'Pizzaria',
        'descrition': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil',
        'remainingDays': 5,
        'currentAmountRaised': 15000,
        'image': '/assets/pizzaria.jpg',
        'fundingPercent': 80,
        'hasControls': true
    },
    {
        '_id': '123',
        'name': 'Bakery',
        'descrition': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil',
        'remainingDays': 16,
        'currentAmountRaised': 20000,
        'image': '/assets/bakery.jpg',
        'fundingPercent': 75,
        'hasControls': true
    }
]

export const getCampaings = async (): Promise<Campaign[]> => {
    // const { db } = await connectMongo();
    return campaings;
  };