function showCode(grade){
    let content = document.getElementById("content");

    if(grade == 6){
        content.innerHTML = `
        <h2>🎮 Number Guessing Game (Python)</h2>
        <pre>
import random

number = random.randint(1, 10)
guess = int(input("Guess a number between 1 and 10: "))

if guess == number:
    print("🎉 Correct! You guessed it!")
else:
    print("😢 Wrong! The number was", number)
        </pre>
        `;
    }

    else if(grade == 7){
        content.innerHTML = `
        <h2>🎮 Rock Paper Scissors (Python)</h2>
        <pre>
import random

choices = ["rock", "paper", "scissors"]

user = input("Enter rock, paper or scissors: ").lower()
computer = random.choice(choices)

print("Computer chose:", computer)

if user == computer:
    print("It's a tie!")
elif (user == "rock" and computer == "scissors") or 
     (user == "paper" and computer == "rock") or 
     (user == "scissors" and computer == "paper"):
    print("🎉 You win!")
else:
    print("😢 You lose!")
        </pre>
        <h2>➗ Multiplication Table Generator (Python)</h2>
        <pre>
num = int(input("Enter a number: "))

for i in range(1, 11):
    print(num, "x", i, "=", num*i)
        </pre>
        <h2>
🎮 simple catch if you can? (Pygame)</h2>
<pre>
import pygame, random
pygame.init()

screen = pygame.display.set_mode((500,400))
ball_x = random.randint(50,450)
ball_y = random.randint(50,350)
run = True

while run:
    screen.fill((255,255,255))
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            run = False

    mx, my = pygame.mouse.get_pos()

    if (mx-ball_x)**2 + (my-ball_y)**2 < 30**2:
        ball_x = random.randint(50,450)
        ball_y = random.randint(50,350)

    pygame.draw.circle(screen,(255,0,0),(ball_x,ball_y),30)
    pygame.display.update()

pygame.quit()
</pre>
        `
        ;
    }

    else if(grade == 8){
        content.innerHTML = `

        <h2>📝 Fun Quiz Project</h2>

        <h3>📌 HTML CODE:</h3>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Fun Quiz&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;

&lt;body&gt;

    &lt;div class="box"&gt;
        &lt;h2&gt;🎉 Quick Quiz&lt;/h2&gt;
        &lt;p&gt;What is 5 + 3?&lt;/p&gt;

        &lt;button onclick="checkAnswer(6)"&gt;6&lt;/button&gt;
        &lt;button onclick="checkAnswer(8)"&gt;8&lt;/button&gt;
        &lt;button onclick="checkAnswer(10)"&gt;10&lt;/button&gt;

        &lt;div id="result"&gt;&lt;/div&gt;
    &lt;/div&gt;

    &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>

        <h3>🎨 CSS CODE:</h3>
        <pre>
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background: linear-gradient(to right, #ff9a9e, #fad0c4);
}

.box {
    background: white;
    width: 320px;
    margin: 80px auto;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

button {
    padding: 10px 15px;
    margin: 5px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #ff6f61;
    color: white;
}

button:hover {
    background: #e85a4f;
}

#result {
    margin-top: 15px;
    font-weight: bold;
}
        </pre>

        <h3>⚙️ JAVASCRIPT CODE:</h3>
        <pre>
function checkAnswer(answer) {
    if (answer === 8) {
        document.getElementById("result").innerHTML = 
            "✅ Correct! Well Done!";
    } else {
        document.getElementById("result").innerHTML = 
            "❌ Wrong! Try Again!";
    }
}
        </pre>
        <h2>Multiplication Table generator</h2>
        <h2>HTML CODE</h2>
        <pre>
<pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Multiplication Table&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h2&gt;Multiplication Table Generator&lt;/h2&gt;

    &lt;input type="number" id="num" placeholder="Enter number"&gt;
    &lt;button onclick="table()"&gt;Generate&lt;/button&gt;

    &lt;div id="result"&gt;&lt;/div&gt;

    &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

        </pre>
        <h2>CSS CODE</h2>
        <pre>
body {
    text-align: center;
    font-family: Arial;
    margin-top: 50px;
}

input, button {
    padding: 8px;
    font-size: 16px;
}

#result {
    margin-top: 20px;
    font-weight: bold;
}

        </pre>
        <h2>JAVASCRIPT CODE</h2>
        <pre>
function table() {
    let n = document.getElementById("num").value;
    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += n + " x " + i + " = " + (n * i) + "&lt;br&gt;";
    }

document.getElementById("result").innerHTML = output;
}
        </pre>
        `;
    }
    else if(grade == 9){
    content.innerHTML = `

    <h2>📡 Ultrasonic Sensor with 2 LED Indicator (Arduino)</h2>
    <pre>
#define trigPin 2
#define echoPin 3

#define redLED 8
#define greenLED 9

long duration;
int distance;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  pinMode(redLED, OUTPUT);
  pinMode(greenLED, OUTPUT);

  Serial.begin(9600);
}

void loop() {

  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;

  Serial.print("Distance: ");
  Serial.println(distance);

  if (distance > 15) {
    digitalWrite(greenLED, HIGH);
    digitalWrite(redLED, LOW);
  } else {
    digitalWrite(greenLED, LOW);
    digitalWrite(redLED, HIGH);
  }

  delay(200);
}
    </pre>

    <h2>🚦 Program 2: Traffic Light (Tri-Color LED)</h2>
    <pre>
void setup() {
  pinMode(8, OUTPUT);   // Red
  pinMode(9, OUTPUT);   // Yellow
  pinMode(10, OUTPUT);  // Green
}

void loop() {

  digitalWrite(8, HIGH);
  digitalWrite(9, LOW);
  digitalWrite(10, LOW);
  delay(3000);

  digitalWrite(8, LOW);
  digitalWrite(9, HIGH);
  digitalWrite(10, LOW);
  delay(1000);

  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  digitalWrite(10, HIGH);
  delay(3000);
}
    </pre>
    `;
}


    else{
        content.innerHTML = "<h2>Games for Grade " + grade + " coming soon!</h2>";
    }
}
