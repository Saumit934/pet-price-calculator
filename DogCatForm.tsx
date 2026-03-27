import React, { useState } from 'react';

const DogCatForm = () => {
  const [animalType, setAnimalType] = useState('dog');
  const [breed, setBreed] = useState('');
  const [pedigree, setPedigree] = useState(false);
  const [age, setAge] = useState('');
  const [appearanceQuality, setAppearanceQuality] = useState('');
  const [certification, setCertification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{animalType === 'dog' ? 'Dog' : 'Cat'} Price Calculator</h1>
      <div>
        <label htmlFor="animalType">Select Animal: </label>
        <select id="animalType" onChange={(e) => setAnimalType(e.target.value)}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </div>
      <div>
        <label htmlFor="breed">Breed: </label>
        <select id="breed" value={breed} onChange={(e) => setBreed(e.target.value)}>
          <option value="">Select Breed</option>
          {animalType === 'dog' && <option value="bulldog">Bulldog</option>}
          {animalType === 'dog' && <option value="labrador">Labrador</option>}
          {animalType === 'cat' && <option value="persian">Persian</option>}
          {animalType === 'cat' && <option value="siamese">Siamese</option>}
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={pedigree} onChange={(e) => setPedigree(e.target.checked)} />
          Pedigree
        </label>
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <select id="age" value={age} onChange={(e) => setAge(e.target.value)}>
          <option value="">Select Age</option>
          <option value="puppy">Puppy</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>
      </div>
      <div>
        <label htmlFor="appearanceQuality">Appearance Quality: </label>
        <input type="text" id="appearanceQuality" value={appearanceQuality} onChange={(e) => setAppearanceQuality(e.target.value)} />
      </div>
      <div>
        <label htmlFor="certification">Certification: </label>
        <input type="text" id="certification" value={certification} onChange={(e) => setCertification(e.target.value)} />
      </div>
      <button type="submit">Calculate Price</button>
    </form>
  );
};

export default DogCatForm;