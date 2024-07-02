const mongoose = require('mongoose');

// Replace with your connection string and database name
const connectionString = 'mongodb://localhost:27017/words';

const words = [
    { spanish: "Hola", english: "Hello" },
    { spanish: "Adiós", english: "Goodbye" },
    { spanish: "Sí", english: "Yes" },
    { spanish: "No", english: "No" },
    { spanish: "Gracias", english: "Thank you" },
    { spanish: "Por favor", english: "Please" },
    { spanish: "De nada", english: "You're welcome" },
    { spanish: "Lo siento", english: "Sorry" },
    { spanish: "¿Cómo estás?", english: "How are you?" },
    { spanish: "Estoy bien", english: "I'm fine" },
    { spanish: "Me llamo...", english: "My name is..." },
    { spanish: "¿Cómo te llamas?", english: "What is your name?" },
    { spanish: "Yo", english: "I" },
    { spanish: "Tú", english: "You (informal)" },
    { spanish: "Él", english: "He" },
    { spanish: "Ella", english: "She" },
    { spanish: "Nosotros/as", english: "We" },
    { spanish: "Vosotros/as", english: "You (plural, informal)" },
    { spanish: "Ellos", english: "They (masculine)" },
    { spanish: "Ellas", english: "They (feminine)" },
    { spanish: "Un/Una", english: "A/An" },
    { spanish: "El", english: "The (masculine)" },
    { spanish: "La", english: "The (feminine)" },
    { spanish: "De", english: "Of" },
    { spanish: "En", english: "In" },
    { spanish: "Y", english: "And" },
    { spanish: "Pero", english: "But" },
    { spanish: "Para", english: "For" },
    { spanish: "Un", english: "One (masculine)" },
    { spanish: "Una", english: "One (feminine)" },
    { spanish: "Dos", english: "Two" },
    { spanish: "Tres", english: "Three" },
    { spanish: "Cuatro", english: "Four" },
    { spanish: "Cinco", english: "Five" },
    { spanish: "Seis", english: "Six" },
    { spanish: "Siete", english: "Seven" },
    { spanish: "Ocho", english: "Eight" },
    { spanish: "Nueve", english: "Nine" },
    { spanish: "Diez", english: "Ten" },
    { spanish: "Está", english: "Is (feminine singular)" },
    { spanish: "Están", english: "Are (plural)" },
    { spanish: "Soy", english: "I am" },
    { spanish: "Tiene", english: "Has (he/she/it)" },
    { spanish: "Tenemos", english: "We have" },
    { spanish: "Habla", english: "Speaks" },
    { spanish: "Hablo", english: "I speak" },
    { spanish: "¿Dónde está...?", english: "Where is...?" },
    { spanish: "¿Qué es esto?", english: "What is this?" },
    { spanish: "Agua", english: "Water" },
    { spanish: "Café", english: "Coffee" },
    { spanish: "Té", english: "Tea" },
    { spanish: "Vino", english: "Wine" },
    { spanish: "Cerveza", english: "Beer" },
    { spanish: "Comida", english: "Food" },
    { spanish: "Pan", english: "Bread" },
    { spanish: "Arroz", english: "Rice" },
    { spanish: "Carne", english: "Meat" },
    { spanish: "Pollo", english: "Chicken" },
    { spanish: "Pescado", english: "Fish" },
    { spanish: "Fruta", english: "Fruit" },
    { spanish: "Verdura", english: "Vegetable" },
    { spanish: "Leche", english: "Milk" },
    { spanish: "Queso", english: "Cheese" },
    { spanish: "Huevo", english: "Egg" },
    { spanish: "Azúcar", english: "Sugar" },
    { spanish: "Sal", english: "Salt" },
    { spanish: "Aceite", english: "Oil" },
    { spanish: "Mantequilla", english: "Butter" },
    { spanish: "Chocolate", english: "Chocolate" },
    { spanish: "Helado", english: "Ice cream" },
    { spanish: "Café", english: "Coffee" },
    { spanish: "Té", english: "Tea" },
    { spanish: "Vino", english: "Wine" },
    { spanish: "Cerveza", english: "Beer" },
    { spanish: "Restaurante", english: "Restaurant" },
    { spanish: "Hotel", english: "Hotel" },
    { spanish: "Banco", english: "Bank" },
    { spanish: "Hospital", english: "Hospital" },
    { spanish: "Aeropuerto", english: "Airport" },
    { spanish: "Estación de tren", english: "Train station" },
    { spanish: "Taxi", english: "Taxi" },
    { spanish: "Autobús", english: "Bus" },
    { spanish: "Coche", english: "Car" },
    { spanish: "Motocicleta", english: "Motorcycle" },
    { spanish: "Bicicleta", english: "Bicycle" },
    { spanish: "Calle", english: "Street" },
    { spanish: "Avenida", english: "Avenue" },
    { spanish: "Plaza", english: "Square" },
    { spanish: "Parque", english: "Park" },
    { spanish: "Playa", english: "Beach" },
    { spanish: "Montaña", english: "Mountain" },
    { spanish: "Río", english: "River" },
    { spanish: "Lago", english: "Lake" },
    { spanish: "Ciudad", english: "City" },
    { spanish: "Pueblo", english: "Town" },
    { spanish: "País", english: "Country" },
    { spanish: "Mundo", english: "World" },
    { spanish: "Sol", english: "Sun" },
    { spanish: "Luna", english: "Moon" },
    { spanish: "Estrella", english: "Star" },
    { spanish: "Cielo", english: "Sky" },
    { spanish: "Nube", english: "Cloud" },
    { spanish: "Lluvia", english: "Rain" },
    { spanish: "Nieve", english:  "Snow" },
    { spanish: "Frío", english: "Cold" },
    { spanish: "Calor", english: "Hot" },
    { spanish: "Bueno", english: "Good" },
    { spanish: "Malo", english: "Bad" },
    { spanish: "Grande", english: "Big" },
    { spanish: "Pequeño", english: "Small" },
    { spanish: "Nuevo", english: "New" },
    { spanish: "Viejo", english: "Old" },
    { spanish: "Hermoso", english: "Beautiful" },
    { spanish: "Feo", english: "Ugly" },
    { spanish: "Feliz", english: "Happy" },
    { spanish: "Triste", english: "Sad" },
    { spanish: "Libre", english: "Free" },
    { spanish: "Ocupado", english: "Busy" },
    { spanish: "Limpio", english: "Clean" },
    { spanish: "Sucio", english: "Dirty" },
    { spanish: "Interesante", english: "Interesting" },
    { spanish: "Aburrido", english: "Boring" },
    { spanish: "Fácil", english: "Easy" },
    { spanish: "Difícil", english: "Difficult" },
    { spanish: "Rápido", english: "Fast" },
    { spanish: "Lento", english: "Slow" },
    { spanish: "Alto", english: "Tall" },
    { spanish: "Bajo", english: "Short" },
    { spanish: "Grueso", english: "Fat" },
    { spanish: "Delgado", english: "Thin" },
    { spanish: "Joven", english: "Young" },
    { spanish: "Viejo", english: "Old" },
    { spanish: "Libro", english: "Book" },
    { spanish: "Película", english: "Movie" },
    { spanish: "Música", english: "Music" },
    { spanish: "Deporte", english: "Sport" },
    { spanish: "Arte", english: "Art" },
    { spanish: "Comida", english: "Food" },
    { spanish: "Bebida", english: "Drink" },
    { spanish: "Dinero", english: "Money" },
    { spanish: "Tiempo", english: "Time" },
    { spanish: "Amor", english: "Love" },
    { spanish: "Familia", english: "Family" },
    { spanish: "Amigo", english: "Friend" },
    { spanish: "Trabajo", english: "Job" },
    { spanish: "Escuela", english: "School" },
    { spanish: "Casa", english: "House" },
    { spanish: "Felicidad", english: "Happiness" },
    { spanish: "Tristeza", english: "Sadness" },
    { spanish: "Miedo", english: "Fear" },
    { spanish: "Ira", english: "Anger" },
    { spanish: "Sorpresa", english: "Surprise" },
    { spanish: "Vergüenza", english: "Shame" },
    { spanish: "Hablar", english: "To speak" },
    { spanish: "Escuchar", english: "To listen" },
    { spanish: "Leer", english: "To read" },
    { spanish: "Escribir", english: "To write" },
    { spanish: "Ver", english: "To see" },
    { spanish: "Oír", english: "To hear" },
    { spanish: "Oler", english: "To smell" },
    { spanish: "Gustar", english: "To taste" },
    { spanish: "Tocar", english: "To touch" },
    { spanish: "Pensar", english: "To think" },
    { spanish: "Sentir", english: "To feel" },
    { spanish: "Vivir", english: "To live" },
    { spanish: "Morir", english: "To die" },
    { spanish: "Comer", english: "To eat" },
    { spanish: "Beber", english: "To drink" },
    { spanish: "Dormir", english: "To sleep" },
    { spanish: "Soñar", english: "To dream" },
    { spanish: "Reír", english: "To laugh" },
    { spanish: "Llorar", english: "To cry" },
    { spanish: "Trabajar", english: "To work" },
    { spanish: "Estudiar", english: "To study" },
    { spanish: "Jugar", english: "To play" },
    { spanish: "Viajar", english: "To travel" },
    { spanish: "Amar", english: "To love" },
    { spanish: "Odiar", english: "To hate" },
    { spanish: "Querer", english: "To want" },
    { spanish: "Necesitar", english: "To need" },
    { spanish: "Poder", english: "To be able to" },
    { spanish: "Saber", english: "To know" },
    { spanish: "Creer", english: "To believe" },
    { spanish: "Tener", english: "To have" },
    { spanish: "Ser", english: "To be" },
    { spanish: "Estar", english: "To be" },
    { spanish: "Ir", english: "To go" },
    { spanish: "Venir", english: "To come" },
    { spanish: "Quedar", english: "To stay" },
    { spanish: "Volver", english: "To return" },
    { spanish: "Llevar", english: "To take" },
    { spanish: "Traer", english: "To bring" },
    { spanish: "Dar", english: "To give" },
    { spanish: "Pedir", english: "To ask" },
    { spanish: "Decir", english: "To say" },
    { spanish: "Responder", english: "To answer" },
    { spanish: "Preguntar", english: "To ask" },
    { spanish: "Llamar", english: "To call" },
    { spanish: "Pensar", english: "To think" },
    { spanish: "Creer", english: "To believe" }
];

mongoose.connect(connectionString) // No deprecated options needed
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Define your schema if your data has complex structure (optional)
const spanishWordSchema = new mongoose.Schema({
  spanish: String,
  english: String,
});

const SpanishWord = mongoose.model('top_200', spanishWordSchema);  // Replace with your desired collection name

SpanishWord.insertMany(words)
  .then(result => {
    console.log("Successfully inserted", result.length, "documents");
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });