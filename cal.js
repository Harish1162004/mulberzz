<script>
  const form = document.getElementById('calorie-form');
  const foodInput = document.getElementById('food');
  const calorieInput = document.getElementById('calories');
  const list = document.getElementById('calorie-list');
  const totalDisplay = document.getElementById('total');

  let totalCalories = 0;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const food = foodInput.value.trim();
    const calories = parseInt(calorieInput.value);

    if (!food || isNaN(calories)) return;

    const li = document.createElement('li');
    li.innerHTML = `
      ${food} - ${calories} kcal 
      <button onclick="removeItem(this, ${calories})">✖</button>
    `;

    list.appendChild(li);
    totalCalories += calories;
    updateTotal();

    foodInput.value = '';
    calorieInput.value = '';
  });

  function updateTotal() {
    totalDisplay.textContent = totalCalories;
  }

  function removeItem(button, calories) {
    button.parentElement.remove();
    totalCalories -= calories;
    updateTotal();
  }
</script>
