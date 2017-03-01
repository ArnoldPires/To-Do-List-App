$(function(){
  $("body")

    .on("click", "#add-new-todo", function(){

      var todo = $(`<li class="todo">
        <label>
          <input type="checkbox"> <span class="todo-text"></span>
        </label>
        <button class="edit-todo">Edit</button>
        <button class="delete-todo">Delete</button>
      </li>`);

      $("#todos").append(todo);

      $(".todo-text", todo).text( $("#new-todo-text").val() || "" );

      $("#new-todo-text").val("");
    })

    .on("change", ".todo :checkbox", function(){
      $(this).parents(".todo")[this.checked ? "addClass" : "removeClass"]("complete");
    })

    .on("click", ".delete-todo", function(){
      $(this).parents(".todo").remove();
    })

    .on("click", "#clear-list", function(){
      $("#todos .todo").remove();
    })

    .on("click", "#clear-completed", function(){
      $("#todos .todo.complete").remove();
    })

    .on("click", ".edit-todo", function(){

    })

    .on("click change", "button, .todo :checkbox", function(){
      $("#remaining-todos").text($(".todo:not(.complete)").length);
    });
});
