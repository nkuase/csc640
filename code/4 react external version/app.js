// React and ReactDOM from global scope
window.React = window.React || {};
window.ReactDOM = window.ReactDOM || {};
var require = function(name) {
  if (name === 'react') return window.React;
  if (name === 'react-dom') return window.ReactDOM;
  throw new Error('Module not found: ' + name);
};
"use strict";
var AppModule = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/App.tsx
  var App_exports = {};
  __export(App_exports, {
    default: () => App_default
  });
  function GradeInput({ onAdd }) {
    const [name, setName] = React.useState("");
    const [score, setScore] = React.useState("");
    const [weight, setWeight] = React.useState("");
    const [error, setError] = React.useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      setError("");
      if (!name.trim()) {
        setError("Please enter an assignment name");
        return;
      }
      const scoreNum = parseFloat(score);
      const weightNum = parseFloat(weight);
      if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
        setError("Score must be between 0 and 100");
        return;
      }
      if (isNaN(weightNum) || weightNum < 0 || weightNum > 100) {
        setError("Weight must be between 0 and 100");
        return;
      }
      onAdd({
        name: name.trim(),
        score: scoreNum,
        weight: weightNum
      });
      setName("");
      setScore("");
      setWeight("");
    };
    React.useEffect(() => {
      setError("");
    }, [name, score, weight]);
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "grade-form" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        value: name,
        onChange: (e) => setName(e.target.value),
        placeholder: "Assignment name"
      }
    ), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        value: score,
        onChange: (e) => setScore(e.target.value),
        placeholder: "Score (0-100)",
        min: "0",
        max: "100",
        step: "0.1"
      }
    ), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        value: weight,
        onChange: (e) => setWeight(e.target.value),
        placeholder: "Weight %",
        min: "0",
        max: "100",
        step: "0.1"
      }
    ), /* @__PURE__ */ React.createElement("button", { type: "submit" }, "Add Grade")), error && /* @__PURE__ */ React.createElement("div", { className: "error" }, error));
  }
  function GradeItem({ grade, onDelete }) {
    return /* @__PURE__ */ React.createElement("div", { className: "grade-item" }, /* @__PURE__ */ React.createElement("div", { className: "grade-info" }, /* @__PURE__ */ React.createElement("strong", null, grade.name), /* @__PURE__ */ React.createElement("span", null, grade.score.toFixed(1), "% (Weight: ", grade.weight.toFixed(1), "%)")), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "delete-btn",
        onClick: () => onDelete(grade.id)
      },
      "Delete"
    ));
  }
  function GradeList({ grades, onDelete }) {
    if (grades.length === 0) {
      return /* @__PURE__ */ React.createElement("p", { className: "empty" }, "No grades yet. Add one above!");
    }
    return /* @__PURE__ */ React.createElement("div", { className: "grade-list" }, grades.map((grade) => /* @__PURE__ */ React.createElement(
      GradeItem,
      {
        key: grade.id,
        grade,
        onDelete
      }
    )));
  }
  function GradeResult({ grades }) {
    const calculateResult = () => {
      if (grades.length === 0) return null;
      const totalWeight = grades.reduce((sum, g) => sum + g.weight, 0);
      if (totalWeight === 0) return null;
      const weightedSum = grades.reduce(
        (sum, g) => sum + g.score * g.weight,
        0
      );
      const finalGrade = weightedSum / totalWeight;
      const letterGrade = getLetterGrade(finalGrade);
      return { finalGrade, letterGrade, totalWeight };
    };
    const getLetterGrade = (score) => {
      if (score >= 90) return "A";
      if (score >= 80) return "B";
      if (score >= 70) return "C";
      if (score >= 60) return "D";
      return "F";
    };
    const result = calculateResult();
    if (!result) {
      return /* @__PURE__ */ React.createElement("div", { className: "result" }, "Add grades to see your final grade");
    }
    return /* @__PURE__ */ React.createElement("div", { className: "result" }, /* @__PURE__ */ React.createElement("h2", null, "Final Grade: ", result.finalGrade.toFixed(2), "%"), /* @__PURE__ */ React.createElement("div", { className: `letter-grade grade-${result.letterGrade}` }, result.letterGrade), /* @__PURE__ */ React.createElement("small", null, "Total weight: ", result.totalWeight.toFixed(1), "%", result.totalWeight < 100 && /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("br", null), "Note: Only ", result.totalWeight.toFixed(1), "% of grades entered")));
  }
  function GradeCalculatorApp() {
    const [grades, setGrades] = React.useState(() => {
      const saved = localStorage.getItem("grades");
      return saved ? JSON.parse(saved) : [];
    });
    React.useEffect(() => {
      localStorage.setItem("grades", JSON.stringify(grades));
    }, [grades]);
    const addGrade = (gradeData) => {
      const currentTotalWeight = grades.reduce((sum, g) => sum + g.weight, 0);
      if (currentTotalWeight + gradeData.weight > 100) {
        alert(`Total weight would exceed 100% (current: ${currentTotalWeight}%)`);
        return;
      }
      const newGrade = {
        ...gradeData,
        id: Date.now()
      };
      setGrades([...grades, newGrade]);
    };
    const deleteGrade = (id) => {
      setGrades(grades.filter((g) => g.id !== id));
    };
    return /* @__PURE__ */ React.createElement("div", { className: "app" }, /* @__PURE__ */ React.createElement("h1", null, "Grade Calculator (React Edition)"), /* @__PURE__ */ React.createElement(GradeInput, { onAdd: addGrade }), /* @__PURE__ */ React.createElement(GradeList, { grades, onDelete: deleteGrade }), /* @__PURE__ */ React.createElement(GradeResult, { grades }));
  }
  var App_default = GradeCalculatorApp;
  return __toCommonJS(App_exports);
})();
