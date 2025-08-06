import React from 'react';
import Exercise1_HelloWorld from './exercises/Exercise1_HelloWorld';
import GreetingCard from './exercises/Exercise2_GreetingCard';
import Counter from './exercises/Exercise3_Counter';
import ToggleVisibility from './exercises/Exercise4_ToggleVisibility';
import TodoListCombined from './exercises/Exercise5_6_TodoListCombined';
import Timer from './exercises/Exercise7_Timer';
import UserProfile from './exercises/Exercise8_UserProfile';
import NavigationApp from './exercises/Exercise9_Navigation';
import LoginForm from './exercises/Exercise10_LoginForm';
import ThemeSwitcherApp from './exercises/Exercise11_ThemeSwitcher';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>
        Lab 4 React Exercises
      </h1>

      {/* Exercise 1 */}
      <section style={sectionStyle}>
        <h2>Ex 1:</h2>
        <Exercise1_HelloWorld />
      </section>

      {/* Exercise 2 */}
      <section style={sectionStyle}>
        <h2>Ex 2:</h2>
        <GreetingCard name="Ocean" />
        <GreetingCard name="Blue" />
        <GreetingCard name="Clone" />
      </section>

      {/* Exercise 3 */}
      <section style={sectionStyle}>
        <h2>Ex 3:</h2>
        <Counter />
      </section>

      {/* Exercise 4 */}
      <section style={sectionStyle}>
        <h2>Ex 4:</h2>
        <ToggleVisibility />
      </section>

      {/* Exercise 5+6 */}
      <section style={sectionStyle}>
        <h2>Exercise 5 & 6:</h2>
        <TodoListCombined />
      </section>

      {/* Exercise 7 */}
      <section style={sectionStyle}>
        <h2>Exercise 7: </h2>
        <Timer />
      </section>
      
      {/* Exercise 8 */}
      <section style={sectionStyle}>
        <h2>Exercise 8: </h2>
        <UserProfile />
      </section>

      {/* Exercise 9 */}
      <section style={sectionStyle}>
        <h2>Exercise 9: </h2>
        <NavigationApp />
      </section>

      {/* Exercise 10 */}
      <section style={sectionStyle}>
        <h2>Exercise 10: </h2>
        <LoginForm />
      </section>

      {/* Exercise 11 */}
      <section style={sectionStyle}>
        <h2>Exercise 11: Theme Switcher (Context API)</h2>
        <ThemeSwitcherApp />
      </section>
      
    </div>
  );
}

const sectionStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '24px',
  backgroundColor: '#fafafa',
  boxShadow: '0 0 10px rgba(0,0,0,0.05)'
};

export default App;
