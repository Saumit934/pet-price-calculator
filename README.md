# Pet Price Calculator

## Overview
The Pet Price Calculator is a tool designed to help users calculate the price of their pets based on various parameters. It uses predefined formulas and multipliers to provide accurate pricing estimates for different pet types.

## Features
- User-friendly interface for easy input of pet details.
- Supports various pet types including dogs, cats, and exotic pets.
- Customizable pricing formulas based on user preferences.
- Save and retrieve pricing calculations for future reference.

## Pricing Formulas
The pricing calculation is based on specific formulas which can vary depending on the type of pet. These formulas consider factors such as breed, age, size, and health.
- **Dogs**: base_price + (age * age_multiplier) + (size * size_multiplier)
- **Cats**: base_price + (age * age_multiplier)
- **Exotic Pets**: base_price + (rarity_factor * rarity_multiplier)

## Multipliers
Multipliers are constants used in the pricing formulas to adjust the final price based on characteristics potentially affecting the pet's market value.
- **Size Multiplier**: Affects pricing based on the size of the pet (e.g., small, medium, large).
- **Age Multiplier**: Affects pricing based on the age of the pet (younger pets may be priced higher).

## Usage Examples
1. **Dog Pricing**:
   - Input: Breed: Labrador, Age: 2 years, Size: Large  
   - Calculation: 200 + (2 * 20) + (50) = 290

2. **Cat Pricing**:
   - Input: Breed: Persian, Age: 3 years  
   - Calculation: 150 + (3 * 15) = 195

3. **Exotic Pet Pricing**:
   - Input: Type: Parrot, Rarity: Rare  
   - Calculation: 300 + (5 * 25) = 425

## Quick Start Guide
1. Clone the repository:
   ```bash
   git clone https://github.com/Saumit934/pet-price-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pet-price-calculator
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

5. Use the application to input pet details and receive pricing estimates. 

## Conclusion
This tool aims to simplify the process of calculating pet prices, making it accessible and easy for users to understand their options when considering pet ownership.