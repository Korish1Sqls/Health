// ПОЛНЫЙ ПЕРЕВОД
const translations = {
    ru: {
        step_counter: "Шагомер", steps: "шагов", step: "шаг", add: "Добавить", reset: "Сброс",
        distance: "Расстояние", calories: "Калории", minutes: "Минуты", min: "мин",
        nutrition: "Питание", sleep: "Сон", bed_time: "Лёг спать", wake_time: "Проснулся",
        bed_time_prompt: "Время отхода ко сну (ЧЧ:ММ)", wake_time_prompt: "Время пробуждения (ЧЧ:ММ)",
        weekly_energy: "Расход энергии за 7 дней", journal: "Журнал", overview: "Обзор данных",
        activity: "Активность", activity_sub: "шаги, расстояние", nutrition_sub: "калории", sleep_sub: "качество",
        back: "Назад", profile: "Профиль", upload_photo: "Загрузить фото",
        current_weight: "Текущий вес", height: "Рост", gender: "Пол", step_goal: "Цель шагов",
        calorie_goal: "Цель калорий", sleep_goal: "Цель сна", bmi: "ИМТ",
        weight_history: "История веса", record_weight: "Записать вес",
        settings: "Настройки", step_goal_setting: "Цель шагов", calorie_goal_setting: "Цель калорий",
        sleep_goal_setting: "Цель сна (ч)", language: "Язык", units: "Единицы",
        distance_unit: "Расстояние", save: "Сохранить", logout: "Выйти", main: "Главная",
        kcal_short: "ккал", hours: "часов", hour_short: "ч", dish: "Блюдо",
        km_short: "км", mi_short: "миль", metric: "Метрические", imperial: "Имперские",
        steps_per_week: "шагов за неделю", kcal_eaten: "ккал съедено",
        avg_expense: "Средний расход", food: "еда", weight_stable: "Вес стабилен",
        recommendations: "Рекомендации", water_recommended: "Рекомендуемая вода", liters: "литра в день",
        underweight: "Недостаточный вес. Рекомендуется набрать 2-3 кг.",
        normal_weight: "Нормальный вес. Поддерживайте активность!",
        overweight: "Избыточный вес. Рекомендуется увеличить активность.",
        obesity: "Ожирение. Рекомендуется консультация врача.",
        fill_profile: "Заполните вес и рост в профиле для рекомендаций",
        steps_to_goal: "До цели по шагам", calories_to_goal: "До цели по калориям",
        reset_confirm: "Сбросить шаги?", clear_food_confirm: "Очистить еду?",
        logout_confirm: "Вы уверены? Все данные будут удалены!", photo_added: "Фото добавлено",
        day: "день", mon: "Пн", tue: "Вт", wed: "Ср", thu: "Чт", fri: "Пт", sat: "Сб", sun: "Вс",
        today: "Сегодня", great_sleep: "Отличный сон!", poor_sleep: "Очень плохо! Нужно спать больше!",
        insufficient_sleep: "Недостаточно сна",
        skip: "Пропустить", continue: "Продолжить", finish: "Завершить", name: "Как вас зовут?",
        weight_kg: "Ваш вес (кг)", height_cm: "Ваш рост (см)", gender_select: "Ваш пол",
        male: "Мужской", female: "Женский", email: "Email", step_goal_onboard: "Цель шагов",
        calorie_goal_onboard: "Цель калорий", sleep_goal_onboard: "Цель сна (часы)",
        no_records: "Нет записей", enter_data: "Введите данные", ate_male: "что я ел", ate_female: "что я ела",
        no_food_records: "Нет записей о еде в этот день",
        please_fill: "Пожалуйста, заполните это поле",
        please_select_gender: "Пожалуйста, выберите пол",
        invalid_number: "Введите корректное число"
    },
    en: {
        step_counter: "Step Counter", steps: "steps", step: "step", add: "Add", reset: "Reset",
        distance: "Distance", calories: "Calories", minutes: "Minutes", min: "min",
        nutrition: "Nutrition", sleep: "Sleep", bed_time: "Go to bed", wake_time: "Wake up",
        bed_time_prompt: "Bedtime (HH:MM)", wake_time_prompt: "Wake time (HH:MM)",
        weekly_energy: "Weekly Energy Expenditure", journal: "Journal", overview: "Data Overview",
        activity: "Activity", activity_sub: "steps, distance", nutrition_sub: "calories", sleep_sub: "quality",
        back: "Back", profile: "Profile", upload_photo: "Upload photo",
        current_weight: "Current weight", height: "Height", gender: "Gender", step_goal: "Step goal",
        calorie_goal: "Calorie goal", sleep_goal: "Sleep goal", bmi: "BMI",
        weight_history: "Weight history", record_weight: "Record weight",
        settings: "Settings", step_goal_setting: "Step goal", calorie_goal_setting: "Calorie goal",
        sleep_goal_setting: "Sleep goal (h)", language: "Language", units: "Units",
        distance_unit: "Distance unit", save: "Save", logout: "Logout", main: "Home",
        kcal_short: "kcal", hours: "hours", hour_short: "h", dish: "Dish",
        km_short: "km", mi_short: "mi", metric: "Metric", imperial: "Imperial",
        steps_per_week: "steps per week", kcal_eaten: "kcal eaten",
        avg_expense: "Average expense", food: "food", weight_stable: "Weight stable",
        recommendations: "Recommendations", water_recommended: "Recommended water", liters: "liters per day",
        underweight: "Underweight. Recommended to gain 2-3 kg.",
        normal_weight: "Normal weight. Stay active!",
        overweight: "Overweight. Recommended to increase activity.",
        obesity: "Obesity. Consultation with a doctor recommended.",
        fill_profile: "Fill in weight and height in profile for recommendations",
        steps_to_goal: "Steps to goal", calories_to_goal: "Calories to goal",
        reset_confirm: "Reset steps?", clear_food_confirm: "Clear all food?",
        logout_confirm: "Are you sure? All data will be deleted!", photo_added: "Photo added",
        day: "day", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun",
        today: "Today", great_sleep: "Great sleep!", poor_sleep: "Very bad! Need more sleep!",
        insufficient_sleep: "Not enough sleep",
        skip: "Skip", continue: "Continue", finish: "Finish", name: "What is your name?",
        weight_kg: "Your weight (kg)", height_cm: "Your height (cm)", gender_select: "Your gender",
        male: "Male", female: "Female", email: "Email", step_goal_onboard: "Step goal",
        calorie_goal_onboard: "Calorie goal", sleep_goal_onboard: "Sleep goal (hours)",
        no_records: "No records", enter_data: "Enter data", ate_male: "what I ate", ate_female: "what I ate",
        no_food_records: "No food records for this day",
        please_fill: "Please fill this field",
        please_select_gender: "Please select gender",
        invalid_number: "Please enter a valid number"
    },
    kz: {
        step_counter: "Қадам өлшегіш", steps: "қадам", step: "қадам", add: "Қосу", reset: "Қалпына келтіру",
        distance: "Қашықтық", calories: "Калориялар", minutes: "Минуттар", min: "мин",
        nutrition: "Тамақтану", sleep: "Ұйқы", bed_time: "Ұйықтау", wake_time: "Ояну",
        bed_time_prompt: "Ұйықтау уақыты (СС:ММ)", wake_time_prompt: "Ояну уақыты (СС:ММ)",
        weekly_energy: "7 күндік энергия шығыны", journal: "Күнделік", overview: "Деректерге шолу",
        activity: "Белсенділік", activity_sub: "қадамдар, қашықтық", nutrition_sub: "калориялар", sleep_sub: "сапа",
        back: "Артқа", profile: "Профиль", upload_photo: "Сурет жүктеу",
        current_weight: "Ағымдағы салмақ", height: "Бой", gender: "Жыныс", step_goal: "Қадам мақсаты",
        calorie_goal: "Калория мақсаты", sleep_goal: "Ұйқы мақсаты", bmi: "Дене салмағы индексі",
        weight_history: "Салмақ тарихы", record_weight: "Салмақты жазу",
        settings: "Баптаулар", step_goal_setting: "Қадам мақсаты", calorie_goal_setting: "Калория мақсаты",
        sleep_goal_setting: "Ұйқы мақсаты (сағ)", language: "Тіл", units: "Өлшем бірліктері",
        distance_unit: "Қашықтық бірлігі", save: "Сақтау", logout: "Шығу", main: "Басты бет",
        kcal_short: "ккал", hours: "сағат", hour_short: "сағ", dish: "Тағам",
        km_short: "км", mi_short: "миль", metric: "Метриялық", imperial: "Империялық",
        steps_per_week: "аптадағы қадам", kcal_eaten: "ккал желінді",
        avg_expense: "Орташа шығын", food: "тағам", weight_stable: "Салмақ тұрақты",
        recommendations: "Ұсыныстар", water_recommended: "Ұсынылатын су", liters: "литр күніне",
        underweight: "Салмақ жеткіліксіз. 2-3 кг қосу ұсынылады.",
        normal_weight: "Қалыпты салмақ. Белсенді болыңыз!",
        overweight: "Артық салмақ. Белсенділікті арттыру ұсынылады.",
        obesity: "Семіздік. Дәрігерге кеңесу ұсынылады.",
        fill_profile: "Профильде салмақ пен бойды толтырыңыз",
        steps_to_goal: "Мақсатқа дейінгі қадам", calories_to_goal: "Мақсатқа дейінгі калория",
        reset_confirm: "Қадамдарды қалпына келтіру?", clear_food_confirm: "Тағамды тазалау?",
        logout_confirm: "Сенімдісіз бе? Барлық деректер жойылады!", photo_added: "Сурет қосылды",
        day: "күн", mon: "Дс", tue: "Сс", wed: "Ср", thu: "Бс", fri: "Жм", sat: "Сб", sun: "Жс",
        today: "Бүгін", great_sleep: "Керемет ұйқы!", poor_sleep: "Өте жаман! Көбірек ұйықтау керек!",
        insufficient_sleep: "Ұйқы жеткіліксіз",
        skip: "Өткізіп жіберу", continue: "Жалғастыру", finish: "Аяқтау", name: "Сіздің атыңыз?",
        weight_kg: "Салмағыңыз (кг)", height_cm: "Бойыңыз (см)", gender_select: "Жынысыңыз",
        male: "Ер", female: "Әйел", email: "Электрондық пошта", step_goal_onboard: "Қадам мақсаты",
        calorie_goal_onboard: "Калория мақсаты", sleep_goal_onboard: "Ұйқы мақсаты (сағ)",
        no_records: "Жазбалар жоқ", enter_data: "Деректерді енгізіңіз", ate_male: "не жедім", ate_female: "не жедім",
        no_food_records: "Бұл күні тамақ туралы жазбалар жоқ",
        please_fill: "Өтінеміз, осы өрісті толтырыңыз",
        please_select_gender: "Өтінеміз, жынысыңызды таңдаңыз",
        invalid_number: "Дұрыс сан енгізіңіз"
    }
};

// Глобальные переменные
let currentLang = "ru";
let onboardingStep = 0;
let tempUser = {};

// Основные данные приложения
let todaySteps = 0, stepGoal = 10000, calorieGoal = 2000, sleepGoal = 8;
let foods = [], bedTime = null, wakeTime = null, sleepHours = 0;
let userProfile = { name: "", weight: null, height: null, gender: "", email: "", weightHistory: [] };
let stepsHistory = [0,0,0,0,0,0,0], caloriesHistory = [0,0,0,0,0,0,0];
let sleepHistory = [0,0,0,0,0,0,0];
let mealsByDay = [[],[],[],[],[],[],[]];
let settings = { distanceUnit: "km", language: "ru", units: "metric" };
let currentPhoto = null;

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========
function getGenderAteText() {
    let gender = userProfile.gender || "";
    if(gender === translations[currentLang].male) return translations[currentLang].ate_male;
    return translations[currentLang].ate_female;
}

function getWeekDays() {
    let n = new Date();
    let d = [translations[currentLang].mon, translations[currentLang].tue, translations[currentLang].wed, 
             translations[currentLang].thu, translations[currentLang].fri, translations[currentLang].sat, 
             translations[currentLang].sun];
    let r = [];
    for(let i = 6; i >= 0; i--) {
        let x = new Date(n);
        x.setDate(n.getDate() - i);
        r.push(d[x.getDay() === 0 ? 6 : x.getDay() - 1]);
    }
    return r;
}

function getCurrentDayIndex() {
    return 6;
}

function calcSleep() {
    if(bedTime && wakeTime) {
        let b = new Date(`2000/01/01 ${bedTime}`);
        let w = new Date(`2000/01/01 ${wakeTime}`);
        if(w < b) w.setDate(w.getDate() + 1);
        sleepHours = Math.round(((w - b) / 3600000) * 10) / 10;
        sleepHistory[getCurrentDayIndex()] = sleepHours;
        updateSleepUI();
        updateGauges();
        saveData();
    }
}

function saveData() {
    localStorage.setItem("zozh_data", JSON.stringify({
        todaySteps, stepGoal, calorieGoal, sleepGoal, foods, bedTime, wakeTime, sleepHours,
        userProfile, stepsHistory, caloriesHistory, mealsByDay, sleepHistory, settings, currentLang
    }));
}

function loadData() {
    let d = localStorage.getItem("zozh_data");
    if(d) {
        let data = JSON.parse(d);
        todaySteps = data.todaySteps || 0;
        stepGoal = data.stepGoal || 10000;
        calorieGoal = data.calorieGoal || 2000;
        sleepGoal = data.sleepGoal || 8;
        foods = data.foods || [];
        bedTime = data.bedTime || null;
        wakeTime = data.wakeTime || null;
        sleepHours = data.sleepHours || 0;
        userProfile = data.userProfile || { weightHistory: [] };
        if(!userProfile.weightHistory) userProfile.weightHistory = [];
        stepsHistory = data.stepsHistory || [0,0,0,0,0,0,0];
        caloriesHistory = data.caloriesHistory || [0,0,0,0,0,0,0];
        mealsByDay = data.mealsByDay || [[],[],[],[],[],[],[]];
        sleepHistory = data.sleepHistory || [0,0,0,0,0,0,0];
        settings = data.settings || { distanceUnit: "km", language: "ru", units: "metric" };
        currentLang = data.currentLang || "ru";
        document.getElementById("distanceUnitSelect").value = settings.distanceUnit;
        document.getElementById("languageSelect").value = currentLang;
        updateLanguage();
        updateAll();
        return true;
    }
    return false;
}

// ========== ОБНОВЛЕНИЕ UI ==========
function updateGauges() {
    let stepsAngle = (todaySteps / stepGoal) * 360;
    document.getElementById("stepsGaugeFill").style.background = `conic-gradient(#2e8b57 0deg ${stepsAngle}deg, #eef2f6 ${stepsAngle}deg 360deg)`;
    let totalCal = foods.reduce((s,f) => s + f.calories, 0);
    let calAngle = (totalCal / calorieGoal) * 360;
    document.getElementById("caloriesGaugeFill").style.background = `conic-gradient(#2e8b57 0deg ${calAngle}deg, #eef2f6 ${calAngle}deg 360deg)`;
    document.getElementById("gaugeCalories").innerText = totalCal;
    let sleepAngle = (sleepHours / sleepGoal) * 360;
    document.getElementById("sleepGaugeFill").style.background = `conic-gradient(#2e8b57 0deg ${sleepAngle}deg, #eef2f6 ${sleepAngle}deg 360deg)`;
    document.getElementById("gaugeSleep").innerText = sleepHours.toFixed(1);
}

function updateStepsUI() {
    document.getElementById("stepsDisplay").innerText = todaySteps;
    document.getElementById("gaugeSteps").innerText = todaySteps;
    let dist = todaySteps / 1000;
    let unit = translations[currentLang].km_short;
    if(settings.distanceUnit === "mi") {
        dist = todaySteps / 1609.34;
        unit = translations[currentLang].mi_short;
    }
    document.getElementById("distanceDisplay").innerText = dist.toFixed(2);
    document.getElementById("distanceUnitLabel").innerText = unit;
    document.getElementById("minutesDisplay").innerText = Math.round(todaySteps / 100);
    document.getElementById("caloriesDisplay").innerText = Math.round(todaySteps * 0.05);
    updateGauges();
}

function updateFoodUI() {
    let total = foods.reduce((s,f) => s + f.calories, 0);
    document.getElementById("totalCalories").innerText = total;
    let html = "";
    foods.forEach(f => {
        html += `<div class="food-item">
            ${f.photo ? `<img class="food-photo" src="${f.photo}">` : '<div class="food-photo"><i class="fas fa-utensils"></i></div>'}
            <div class="food-info">
                <div class="food-name">${f.name}</div>
                <div class="food-time"><i class="far fa-clock"></i> ${f.time}</div>
            </div>
            <div class="food-cals"><i class="fas fa-fire"></i> ${f.calories} ${translations[currentLang].kcal_short}</div>
        </div>`;
    });
    document.getElementById("foodList").innerHTML = html || `<div style="text-align:center"><i class="fas fa-utensils"></i> ${translations[currentLang].no_records}</div>`;
    mealsByDay[getCurrentDayIndex()] = [...foods];
    caloriesHistory[getCurrentDayIndex()] = total;
    updateGauges();
}

function showFoodDetails(dayIndex) {
    let days = getWeekDays();
    let meals = mealsByDay[dayIndex] || [];
    let card = document.getElementById("foodDetailCard");
    let title = document.getElementById("foodDetailDate");
    let list = document.getElementById("foodDetailList");
    title.innerText = ` ${days[dayIndex]} - ${getGenderAteText()}`;
    if(!meals.length) {
        list.innerHTML = `<div style="text-align:center; padding:20px;"><i class="fas fa-utensils"></i> ${translations[currentLang].no_food_records}</div>`;
    } else {
        let html = "";
        meals.forEach(m => {
            html += `<div class="food-detail-item-large">
                ${m.photo ? `<img class="food-detail-photo-large" src="${m.photo}">` : `<div class="food-detail-photo-large"><i class="fas fa-utensils" style="font-size:32px;"></i></div>`}
                <div class="food-detail-info-large">
                    <div class="food-detail-name-large">${m.name}</div>
                    <div class="food-detail-cals-large"><i class="fas fa-fire"></i> ${m.calories} ${translations[currentLang].kcal_short}</div>
                    <div class="food-detail-time-large"><i class="far fa-clock"></i> ${m.time}</div>
                </div>
            </div>`;
        });
        list.innerHTML = html;
    }
    card.classList.add("show");
}

function closeFoodDetail() {
    document.getElementById("foodDetailCard").classList.remove("show");
}

function updateSleepUI() {
    document.getElementById("sleepDurationDisplay").innerText = sleepHours.toFixed(1) + " " + translations[currentLang].hour_short;
    if(bedTime) document.getElementById("bedTimeDisplay").innerText = bedTime;
    if(wakeTime) document.getElementById("wakeTimeDisplay").innerText = wakeTime;
    updateGauges();
    updateSleepMessages();
}

function updateSleepMessages() {
    const sleepMsg = document.getElementById("sleepMessage");
    if(sleepMsg) {
        let sh = sleepHistory && sleepHistory[6] !== undefined ? sleepHistory[6] : 0;
        if(sh < 7) sleepMsg.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${translations[currentLang].poor_sleep}`;
        else if(sh < 8) sleepMsg.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${translations[currentLang].insufficient_sleep}`;
        else sleepMsg.innerHTML = `<i class="fas fa-check-circle"></i> ${translations[currentLang].great_sleep}`;
    }
}

function updateWeightHistoryUI() {
    let history = userProfile.weightHistory || [];
    let container = document.getElementById("weightHistoryList");
    let summary = document.getElementById("weightChangeSummary");
    if(!container) return;
    
    if(history.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:12px; color:#94a3b8;"><i class="fas fa-info-circle"></i> ${translations[currentLang].no_records}</div>`;
        summary.innerHTML = '';
        return;
    }
    
    let html = "";
    let sorted = [...history].sort((a,b) => new Date(b.date) - new Date(a.date));
    sorted.forEach((record, idx) => {
        let date = new Date(record.date).toLocaleDateString();
        let change = "";
        if(idx < sorted.length - 1) {
            let prev = sorted[idx + 1].weight;
            let diff = record.weight - prev;
            if(diff > 0) change = `<span style="color:#dc2626">+${diff.toFixed(1)} кг</span>`;
            else if(diff < 0) change = `<span style="color:#2e8b57">${diff.toFixed(1)} кг</span>`;
            else change = `0 кг`;
        }
        html += `<div class="weight-history-item">
            <span><i class="far fa-calendar-alt"></i> ${date}</span>
            <span><strong>${record.weight} кг</strong></span>
            <span class="weight-change ${record.weight - (sorted[idx+1]?.weight || 0) > 0 ? 'down' : ''}">${change}</span>
        </div>`;
    });
    container.innerHTML = html;
    
    let firstWeight = sorted[sorted.length - 1]?.weight;
    let lastWeight = sorted[0]?.weight;
    let totalChange = lastWeight - firstWeight;
    if(totalChange !== undefined) {
        if(totalChange < 0) summary.innerHTML = `<i class="fas fa-arrow-down" style="color:#2e8b57"></i> За всё время сброшено: <strong>${Math.abs(totalChange).toFixed(1)} кг</strong> 🎉`;
        else if(totalChange > 0) summary.innerHTML = `<i class="fas fa-arrow-up" style="color:#dc2626"></i> За всё время набрано: <strong>${totalChange.toFixed(1)} кг</strong>`;
        else summary.innerHTML = `<i class="fas fa-chart-line"></i> ${translations[currentLang].weight_stable}`;
    }
}

function updateProfile() {
    document.getElementById("profileName").innerText = userProfile.name || "Пользователь";
    document.getElementById("profileEmail").innerText = userProfile.email || "user@tracker.com";
    document.getElementById("profileWeight").innerText = userProfile.weight ? userProfile.weight : "--";
    document.getElementById("profileHeight").innerText = userProfile.height ? userProfile.height : "--";
    
    const maleBtn = document.querySelector(".gender-select-btn[data-gender='male']");
    const femaleBtn = document.querySelector(".gender-select-btn[data-gender='female']");
    if(maleBtn && femaleBtn) {
        maleBtn.classList.remove("active");
        femaleBtn.classList.remove("active");
        if(userProfile.gender === translations[currentLang].male) maleBtn.classList.add("active");
        if(userProfile.gender === translations[currentLang].female) femaleBtn.classList.add("active");
    }
    
    document.getElementById("profileStepGoal").innerText = stepGoal;
    document.getElementById("profileCalorieGoal").innerText = calorieGoal;
    document.getElementById("profileSleepGoal").innerHTML = sleepGoal + " <span class='translate' data-key='hour_short'>ч</span>";
    let bmi = userProfile.weight && userProfile.height ? (userProfile.weight / ((userProfile.height/100)**2)).toFixed(1) : "--";
    document.getElementById("profileBMI").innerText = bmi;
    updateWeightHistoryUI();
}

function renderChart(containerId, data, unit, clickCb) {
    let container = document.getElementById(containerId);
    if(!container) return;
    let days = getWeekDays();
    let maxVal = Math.max(...data, 1);
    let html = "";
    for(let i = 0; i < data.length; i++) {
        let val = data[i];
        let heightPercent = (val / maxVal) * 100;
        let isToday = i === data.length - 1;
        let displayValue = unit === "ч" ? val.toFixed(1) + " " + translations[currentLang].hour_short : Math.round(val) + " " + unit;
        html += `<div class="chart-bar-wrapper" data-day="${i}">
            <div class="chart-bar ${isToday ? "today" : ""}" style="height:${heightPercent}%; min-height:4px;"></div>
            <div class="tooltip-text">${displayValue}</div>
        </div>`;
    }
    container.innerHTML = html;
    if(clickCb) {
        container.querySelectorAll(".chart-bar-wrapper").forEach(b => {
            b.addEventListener("click", () => clickCb(parseInt(b.dataset.day)));
        });
    }
    let daysId = containerId === "energyChart" ? "energyDays" : 
                 containerId === "activityStepsChart" ? "activityStepsDays" : 
                 containerId === "nutritionChart" ? "nutritionDays" : "sleepDays";
    let dCont = document.getElementById(daysId);
    if(dCont) {
        let dh = "";
        days.forEach(d => dh += `<span>${d}</span>`);
        dCont.innerHTML = dh;
    }
}

function updateCharts() {
    stepsHistory[getCurrentDayIndex()] = todaySteps;
    caloriesHistory[getCurrentDayIndex()] = foods.reduce((s,f) => s + f.calories, 0);
    sleepHistory[getCurrentDayIndex()] = sleepHours;
    
    let energy = stepsHistory.map(s => Math.round(s * 0.05));
    document.getElementById("weekTotal").innerText = energy.reduce((a,b) => a + b, 0);
    renderChart("energyChart", energy, "ккал");
    renderChart("activityStepsChart", stepsHistory, "шаг");
    renderChart("nutritionChart", caloriesHistory, "ккал", (day) => showFoodDetails(day));
    renderChart("sleepChart", sleepHistory, "ч");
    
    let todaySleep = sleepHistory[6];
    document.getElementById("sleepHours").innerText = todaySleep ? todaySleep.toFixed(1) : "0";
    updateSleepMessages();
    
    let days = getWeekDays();
    let jh = "";
    let totalSteps = 0, totalCals = 0;
    for(let i = 0; i < 7; i++) {
        totalSteps += stepsHistory[i];
        totalCals += caloriesHistory[i];
    }
    let unitKm = settings.distanceUnit === "km" ? translations[currentLang].km_short : translations[currentLang].mi_short;
    for(let i = 6; i >= 0; i--) {
        let dist = settings.distanceUnit === "km" ? (stepsHistory[i]/1000).toFixed(1) : (stepsHistory[i]/1609.34).toFixed(1);
        let todayText = i === getCurrentDayIndex() ? ` (${translations[currentLang].today})` : "";
        jh += `<div class="journal-tile">
            <div class="journal-time"><i class="far fa-calendar-alt"></i> ${days[i]}${todayText}</div>
            <div class="journal-stats">
                <div><div class="journal-stat-number">${stepsHistory[i].toLocaleString()}</div><div class="journal-stat-label"><i class="fas fa-shoe-prints"></i> ${translations[currentLang].step}</div></div>
                <div><div class="journal-stat-number">${dist}</div><div class="journal-stat-label"><i class="fas fa-road"></i> ${unitKm}</div></div>
                <div><div class="journal-stat-number">${Math.round(stepsHistory[i]*0.05)}</div><div class="journal-stat-label"><i class="fas fa-fire"></i> ${translations[currentLang].kcal_short}</div></div>
                <div><div class="journal-stat-number">${caloriesHistory[i]}</div><div class="journal-stat-label"><i class="fas fa-utensils"></i> ${translations[currentLang].food}</div></div>
            </div>
        </div>`;
    }
    document.getElementById("journalContent").innerHTML = jh || `<div class="device-message"><i class="fas fa-info-circle"></i> ${translations[currentLang].no_records}</div>`;
    document.getElementById("weekStats").innerHTML = `<div class="week-stats-value">${totalSteps.toLocaleString()}</div>
        <div>${translations[currentLang].steps_per_week}</div>
        <div style="margin-top:8px"><i class="fas fa-fire"></i> ${totalCals} ${translations[currentLang].kcal_eaten}</div>
        <div><i class="fas fa-chart-line"></i> ${translations[currentLang].avg_expense}: ${Math.round(totalSteps/7*0.05)} ${translations[currentLang].kcal_short}/${translations[currentLang].day}</div>`;
    
    let bmi = userProfile.weight && userProfile.height ? (userProfile.weight / ((userProfile.height/100)**2)).toFixed(1) : null;
    let rec = "";
    if(bmi) {
        if(bmi < 18.5) rec = translations[currentLang].underweight;
        else if(bmi < 25) rec = translations[currentLang].normal_weight;
        else if(bmi < 30) rec = translations[currentLang].overweight;
        else rec = translations[currentLang].obesity;
    } else rec = translations[currentLang].fill_profile;
    let water = userProfile.weight ? Math.round(userProfile.weight * 0.03) : 2;
    document.getElementById("overviewRecommendations").innerHTML = `<div class="tip-title"><i class="fas fa-chart-line"></i> ${translations[currentLang].recommendations}</div>
        <div class="tip-text">💧 ${translations[currentLang].water_recommended}: ${water} ${translations[currentLang].liters}<br>${rec}<br>🎯 ${translations[currentLang].steps_to_goal}: ${Math.max(0, stepGoal - todaySteps)} ${translations[currentLang].step}<br>🍽️ ${translations[currentLang].calories_to_goal}: ${Math.max(0, calorieGoal - foods.reduce((s,f) => s + f.calories, 0))} ${translations[currentLang].kcal_short}</div>`;
}

function updateAll() {
    updateStepsUI();
    updateFoodUI();
    updateSleepUI();
    updateProfile();
    updateCharts();
    document.getElementById("settingStepGoal").value = stepGoal;
    document.getElementById("settingCalGoal").value = calorieGoal;
    document.getElementById("settingSleepGoal").value = sleepGoal;
}

// ========== ЯЗЫК И ПЕРЕВОДЫ ==========
function updateLanguage() {
    document.querySelectorAll(".translate").forEach(el => {
        let key = el.getAttribute("data-key");
        if(translations[currentLang] && translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
    const maleBtn = document.querySelector(".gender-select-btn[data-gender='male']");
    const femaleBtn = document.querySelector(".gender-select-btn[data-gender='female']");
    if(maleBtn) maleBtn.innerText = translations[currentLang].male;
    if(femaleBtn) femaleBtn.innerText = translations[currentLang].female;
    
    const dishPlaceholder = document.getElementById("foodNameInput");
    if(dishPlaceholder) dishPlaceholder.placeholder = translations[currentLang].dish || "Блюдо";
    const kcalPlaceholder = document.getElementById("foodCaloriesInput");
    if(kcalPlaceholder) kcalPlaceholder.placeholder = translations[currentLang].kcal_short || "ккал";
    const unitsSelect = document.getElementById("unitsSelect");
    if(unitsSelect) {
        unitsSelect.options[0].text = translations[currentLang].metric;
        unitsSelect.options[1].text = translations[currentLang].imperial;
    }
    const distSelect = document.getElementById("distanceUnitSelect");
    if(distSelect) {
        distSelect.options[0].text = translations[currentLang].km_short;
        distSelect.options[1].text = translations[currentLang].mi_short;
    }
    updateDaysInCharts();
    updateSleepMessages();
}

function updateDaysInCharts() {
    const daysRows = document.querySelectorAll(".days-row");
    daysRows.forEach(row => {
        const spans = row.querySelectorAll("span");
        if(spans.length === 7) {
            const dayKeys = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
            spans.forEach((span, idx) => {
                const key = dayKeys[idx % 7];
                if(translations[currentLang] && translations[currentLang][key]) span.innerText = translations[currentLang][key];
            });
        }
    });
}

// ========== РЕГИСТРАЦИЯ ==========
function showOnboarding() {
    const container = document.getElementById("phoneScreen");
    const onboardingHTML = `
        <div class="fullscreen-onboarding" id="fullscreenOnboarding">
            <div class="onboarding-header">
                <div class="lang-selector" id="onboardingLangSelector">
                    <div class="lang-option ${currentLang === 'ru' ? 'active' : ''}" data-lang="ru">Рус</div>
                    <div class="lang-option ${currentLang === 'en' ? 'active' : ''}" data-lang="en">Eng</div>
                    <div class="lang-option ${currentLang === 'kz' ? 'active' : ''}" data-lang="kz">Қаз</div>
                </div>
            </div>
            <div class="onboarding-step-container" id="onboardingStepContainer"></div>
        </div>
    `;
    container.insertAdjacentHTML("beforeend", onboardingHTML);
    document.querySelectorAll("#onboardingLangSelector .lang-option").forEach(opt => {
        opt.addEventListener("click", (e) => {
            currentLang = opt.dataset.lang;
            document.querySelectorAll("#onboardingLangSelector .lang-option").forEach(o => o.classList.remove("active"));
            opt.classList.add("active");
            updateLanguage();
            showOnboardingStep(onboardingStep);
        });
    });
    showOnboardingStep(0);
}

function showOnboardingStep(step) {
    const container = document.getElementById("onboardingStepContainer");
    const steps = [
        { title: translations[currentLang].name, input: "text", id: "onbName", placeholder: translations[currentLang].name, required: true },
        { title: translations[currentLang].weight_kg, input: "number", id: "onbWeight", placeholder: "кг", required: true },
        { title: translations[currentLang].height_cm, input: "number", id: "onbHeight", placeholder: "см", required: true },
        { title: translations[currentLang].gender_select, input: "gender", id: "onbGender", required: true },
        { title: translations[currentLang].email, input: "email", id: "onbEmail", placeholder: "email@example.com", required: false },
        { title: translations[currentLang].step_goal_onboard, input: "number", id: "onbStepGoal", placeholder: "10000", value: "10000", required: false },
        { title: translations[currentLang].calorie_goal_onboard, input: "number", id: "onbCalGoal", placeholder: "2000", value: "2000", required: false },
        { title: translations[currentLang].sleep_goal_onboard, input: "number", id: "onbSleepGoal", placeholder: "8", value: "8", step: "0.5", required: false }
    ];
    let stepData = steps[step];
    let inputHtml = "";
    if(stepData.input === "gender") {
        inputHtml = `<div class="gender-buttons" id="genderButtons">
            <button class="gender-btn" data-gender="male">${translations[currentLang].male}</button>
            <button class="gender-btn" data-gender="female">${translations[currentLang].female}</button>
        </div>
        <div class="error-message" id="genderError">${translations[currentLang].please_select_gender}</div>`;
    } else {
        inputHtml = `<input type="${stepData.input}" id="${stepData.id}" class="onboarding-input" placeholder="${stepData.placeholder || ''}" value="${stepData.value || ''}" ${stepData.step ? `step="${stepData.step}"` : ''}>
        <div class="error-message" id="inputError">${translations[currentLang].please_fill}</div>`;
    }
    container.innerHTML = `
        <div class="onboarding-step">
            <h2>${stepData.title}</h2>
            ${inputHtml}
            <div class="onboarding-buttons">
                <button class="btn" id="skipOnboarding">${translations[currentLang].skip}</button>
                <button class="btn btn-primary" id="nextOnboarding">${step === steps.length - 1 ? translations[currentLang].finish : translations[currentLang].continue}</button>
            </div>
        </div>
    `;
    
    if(stepData.input === "gender") {
        const btns = document.querySelectorAll(".gender-btn");
        const errorDiv = document.getElementById("genderError");
        btns.forEach(btn => {
            btn.addEventListener("click", () => {
                btns.forEach(b => b.classList.remove("selected"));
                btn.classList.add("selected");
                tempUser.gender = btn.dataset.gender === "male" ? translations[currentLang].male : translations[currentLang].female;
                errorDiv.classList.remove("show");
            });
        });
    }
    
    document.getElementById("skipOnboarding")?.addEventListener("click", () => {
        if(step === steps.length - 1) finishOnboarding();
        else {
            onboardingStep++;
            showOnboardingStep(onboardingStep);
        }
    });
    
    document.getElementById("nextOnboarding")?.addEventListener("click", () => {
        let isValid = true;
        
        if(step === 0) {
            let name = document.getElementById("onbName")?.value.trim();
            if(!name) {
                document.getElementById("inputError")?.classList.add("show");
                isValid = false;
            } else {
                tempUser.name = name;
                document.getElementById("inputError")?.classList.remove("show");
            }
        }
        if(step === 1) {
            let weight = document.getElementById("onbWeight")?.value;
            if(!weight || isNaN(weight) || weight <= 0) {
                document.getElementById("inputError")?.classList.add("show");
                isValid = false;
            } else {
                tempUser.weight = parseFloat(weight);
                document.getElementById("inputError")?.classList.remove("show");
            }
        }
        if(step === 2) {
            let height = document.getElementById("onbHeight")?.value;
            if(!height || isNaN(height) || height <= 0) {
                document.getElementById("inputError")?.classList.add("show");
                isValid = false;
            } else {
                tempUser.height = parseFloat(height);
                document.getElementById("inputError")?.classList.remove("show");
            }
        }
        if(step === 3) {
            if(!tempUser.gender) {
                document.getElementById("genderError")?.classList.add("show");
                isValid = false;
            } else {
                document.getElementById("genderError")?.classList.remove("show");
            }
        }
        if(step === 4) {
            tempUser.email = document.getElementById("onbEmail")?.value || "";
        }
        if(step === 5) {
            let stepGoalVal = document.getElementById("onbStepGoal")?.value;
            tempUser.stepGoal = parseInt(stepGoalVal) || 10000;
        }
        if(step === 6) {
            let calGoalVal = document.getElementById("onbCalGoal")?.value;
            tempUser.calorieGoal = parseInt(calGoalVal) || 2000;
        }
        if(step === 7) {
            let sleepGoalVal = document.getElementById("onbSleepGoal")?.value;
            tempUser.sleepGoal = parseFloat(sleepGoalVal) || 8;
        }
        
        if(!isValid) return;
        
        if(step === steps.length - 1) {
            finishOnboarding();
        } else {
            onboardingStep++;
            showOnboardingStep(onboardingStep);
        }
    });
}

function finishOnboarding() {
    userProfile = {
        name: tempUser.name || "Пользователь",
        weight: tempUser.weight || null,
        height: tempUser.height || null,
        gender: tempUser.gender || "Мужской",
        email: tempUser.email || "user@tracker.com",
        weightHistory: tempUser.weight ? [{ date: new Date().toISOString(), weight: tempUser.weight }] : []
    };
    if(tempUser.stepGoal) stepGoal = tempUser.stepGoal;
    if(tempUser.calorieGoal) calorieGoal = tempUser.calorieGoal;
    if(tempUser.sleepGoal) sleepGoal = tempUser.sleepGoal;
    saveData();
    updateAll();
    document.getElementById("fullscreenOnboarding")?.remove();
}

// ========== НАВИГАЦИЯ ==========
const screens = {
    main: document.getElementById("mainScreen"),
    journal: document.getElementById("journalScreen"),
    overview: document.getElementById("overviewScreen"),
    profile: document.getElementById("profileScreen"),
    settings: document.getElementById("settingsScreen")
};

const detail = {
    activity: document.getElementById("activityDetailScreen"),
    nutrition: document.getElementById("nutritionDetailScreen"),
    sleep: document.getElementById("sleepDetailScreen")
};

document.querySelectorAll(".nav-item").forEach(i => {
    i.addEventListener("click", () => {
        let s = i.dataset.screen;
        Object.values(screens).forEach(scr => scr.classList.add("hidden"));
        Object.values(detail).forEach(d => d.classList.add("hidden"));
        if(screens[s]) screens[s].classList.remove("hidden");
        document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
        i.classList.add("active");
        if(s === "overview") updateCharts();
    });
});

document.getElementById("activityTile")?.addEventListener("click", () => {
    screens.overview.classList.add("hidden");
    detail.activity.classList.remove("hidden");
    updateCharts();
});

document.getElementById("nutritionOverviewTile")?.addEventListener("click", () => {
    screens.overview.classList.add("hidden");
    detail.nutrition.classList.remove("hidden");
    updateCharts();
});

document.getElementById("sleepOverviewTile")?.addEventListener("click", () => {
    screens.overview.classList.add("hidden");
    detail.sleep.classList.remove("hidden");
    updateCharts();
});

document.getElementById("backFromActivity")?.addEventListener("click", () => {
    detail.activity.classList.add("hidden");
    screens.overview.classList.remove("hidden");
});

document.getElementById("backFromNutrition")?.addEventListener("click", () => {
    detail.nutrition.classList.add("hidden");
    screens.overview.classList.remove("hidden");
});

document.getElementById("backFromSleep")?.addEventListener("click", () => {
    detail.sleep.classList.add("hidden");
    screens.overview.classList.remove("hidden");
});

// ========== ОБРАБОТЧИКИ СОБЫТИЙ ==========
document.getElementById("addStepsBtn")?.addEventListener("click", () => {
    let a = prompt(translations[currentLang].step, "1000");
    if(a) {
        todaySteps += parseInt(a);
        saveData();
        updateAll();
    }
});

document.getElementById("resetStepsBtn")?.addEventListener("click", () => {
    if(confirm(translations[currentLang].reset_confirm)) {
        todaySteps = 0;
        saveData();
        updateAll();
    }
});

document.getElementById("addPhotoBtn")?.addEventListener("click", () => document.getElementById("foodPhotoInput").click());

document.getElementById("foodPhotoInput")?.addEventListener("change", e => {
    if(e.target.files[0]) {
        let r = new FileReader();
        r.onload = ev => {
            currentPhoto = ev.target.result;
            alert(translations[currentLang].photo_added);
        };
        r.readAsDataURL(e.target.files[0]);
    }
});

document.getElementById("addFoodBtn")?.addEventListener("click", () => {
    let n = document.getElementById("foodNameInput").value.trim();
    let c = parseInt(document.getElementById("foodCaloriesInput").value);
    if(!n || isNaN(c)) {
        alert(translations[currentLang].enter_data);
        return;
    }
    foods.push({
        name: n,
        calories: c,
        time: new Date().toLocaleTimeString().slice(0,5),
        photo: currentPhoto
    });
    currentPhoto = null;
    saveData();
    updateAll();
    document.getElementById("foodNameInput").value = "";
    document.getElementById("foodCaloriesInput").value = "";
});

document.getElementById("resetFoodBtn")?.addEventListener("click", () => {
    if(confirm(translations[currentLang].clear_food_confirm)) {
        foods = [];
        saveData();
        updateAll();
    }
});

document.getElementById("bedTimeBtn")?.addEventListener("click", () => {
    let t = prompt(translations[currentLang].bed_time_prompt, "23:00");
    if(t && t.match(/^\d{1,2}:\d{2}$/)) {
        bedTime = t;
        calcSleep();
        saveData();
        updateAll();
    }
});

document.getElementById("wakeTimeBtn")?.addEventListener("click", () => {
    let t = prompt(translations[currentLang].wake_time_prompt, "07:00");
    if(t && t.match(/^\d{1,2}:\d{2}$/)) {
        wakeTime = t;
        calcSleep();
        saveData();
        updateAll();
    }
});

document.getElementById("saveSettingsBtn")?.addEventListener("click", () => {
    stepGoal = parseInt(document.getElementById("settingStepGoal").value) || 10000;
    calorieGoal = parseInt(document.getElementById("settingCalGoal").value) || 2000;
    sleepGoal = parseFloat(document.getElementById("settingSleepGoal").value) || 8;
    settings.distanceUnit = document.getElementById("distanceUnitSelect").value;
    settings.units = document.getElementById("unitsSelect").value;
    currentLang = document.getElementById("languageSelect").value;
    updateLanguage();
    saveData();
    updateAll();
    alert(translations[currentLang].save);
});

document.getElementById("logoutBtn")?.addEventListener("click", () => {
    if(confirm(translations[currentLang].logout_confirm)) {
        localStorage.removeItem("zozh_data");
        location.reload();
    }
});

document.getElementById("uploadAvatarBtn")?.addEventListener("click", () => document.getElementById("avatarInput").click());

document.getElementById("avatarInput")?.addEventListener("change", e => {
    if(e.target.files[0]) {
        let r = new FileReader();
        r.onload = ev => {
            document.getElementById("profileAvatar").innerHTML = `<img src="${ev.target.result}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
            saveData();
        };
        r.readAsDataURL(e.target.files[0]);
    }
});

document.getElementById("editWeightBtn")?.addEventListener("click", () => {
    let w = prompt(translations[currentLang].current_weight, userProfile.weight);
    if(w) {
        let newWeight = parseFloat(w);
        userProfile.weight = newWeight;
        if(!userProfile.weightHistory) userProfile.weightHistory = [];
        userProfile.weightHistory.push({ date: new Date().toISOString(), weight: newWeight });
        saveData();
        updateAll();
    }
});

document.getElementById("addWeightRecordBtn")?.addEventListener("click", () => {
    let w = prompt(translations[currentLang].current_weight, userProfile.weight);
    if(w) {
        let newWeight = parseFloat(w);
        userProfile.weight = newWeight;
        if(!userProfile.weightHistory) userProfile.weightHistory = [];
        userProfile.weightHistory.push({ date: new Date().toISOString(), weight: newWeight });
        saveData();
        updateAll();
    }
});

document.getElementById("editHeightBtn")?.addEventListener("click", () => {
    let h = prompt(translations[currentLang].height, userProfile.height);
    if(h) {
        userProfile.height = parseFloat(h);
        saveData();
        updateAll();
    }
});

document.querySelectorAll(".gender-select-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const genderText = btn.innerText;
        userProfile.gender = genderText;
        saveData();
        updateProfile();
        updateAll();
    });
});

document.getElementById("closeFoodDetail")?.addEventListener("click", closeFoodDetail);

// ========== ЧАСЫ ==========
function updateTime() {
    document.getElementById("liveTime").innerText = new Date().toLocaleTimeString().slice(0,5);
}
setInterval(updateTime, 1000);
updateTime();

// ========== ЗАПУСК ==========
if(!loadData()) {
    showOnboarding();
} else {
    updateAll();
}z