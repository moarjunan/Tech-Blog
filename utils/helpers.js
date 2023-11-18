module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return new Date(date).toLocaleDateString();
  },
  format_amount: (amount) => {
    // Format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();
    let emoji;

    // Return a random emoji
    if (randomNum > 0.7) {
      emoji = '💡'; // Lightbulb
    } else if (randomNum > 0.4) {
      emoji = '💻'; // Laptop
    } else {
      emoji = '⚙️'; // Gear
    }

    return `<span for="img" aria-label="${emoji}">${emoji}</span>`;
  },
};
