import image from './assets/ny.jpg';
import { TitleBlock, TextBlock, ImageBlock, ColumsBlock } from './classes/bloks';

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
            styles: {
                color: '#161513',
                'text-align': 'center',
                padding: '1rem'
            }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        }, 
        imageStyles: {
           width: '950px',
           height: 'auto',
        },
        alt: 'Это картинка'
    }),
    new TextBlock('Нью-Йорк (New York City или City of New York) - мегаполис мирового значения и крупнейший город в США с населением свыше 8,3 миллиона человек. Является экономическим и финансовым центром Соединенных Штатов Америки, а так же одним из самых известных городов в мире.', {
        styles: {
            padding: '1rem',
            'font-weight': 'bold',
            'text-align': 'center'
        }
    }), 
    new ColumsBlock([
        'Основанный голландскими колонистами, этот город изначально назывался Новым Амстердамом.', 
        'В одноимённом штате Нью-Йорк используется всего 8 различных дорожных знаков.', 
        'Небоскрёбов в этом городе больше, чем в любом другом. Больше даже, чем в Сингапуре или Гонконге.'
    ], {
        styles: {
            padding: '2rem',
            color: '#161513',
        }
    })
];