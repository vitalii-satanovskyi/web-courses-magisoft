const expect = require('chai').expect;

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Todo List');
  });
    
  it('Should allow me to create a Todo', () => {
    const todoText = 'Get better at testing';
    browser.url('http://localhost:3000/');
    browser.$('.add-todo__input').setValue(todoText);
    browser.$('.add-todo__submit').click();
    const actual = browser.$('.todo-item__title').getText();

    expect(actual).to.equal(todoText);
  });
});