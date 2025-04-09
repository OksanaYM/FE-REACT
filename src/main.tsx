import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App/>);

//
// Створити кастомний  хук  який буде повертати відповіді з апі і заміняти useState+ useEffect. ендпоінт апі –
// аргумент вашого хука. Продумати логіку типізації відповіді.
//
//     Приклад сигнатури:
//
//     useFetch<T>(url)
//
