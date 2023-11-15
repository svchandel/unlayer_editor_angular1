import { Component, ViewChild } from "@angular/core";
import { EmailEditorComponent } from "angular-email-editor";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-email-editor";

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;

  editorLoaded() {
    this.emailEditor.editor.addEventListener("design:updated", function (data) {
      // Design is updated by the user
      var type = data.type; // body, row, content
      var item = data.item;
      var changes = data.changes;
      console.log("design:updated", type, item, changes);
    });
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  optionsLoaded() {
    return {
      displayMode: "web",
      contentWidth: "700px",
      backgroundColor: "#ffffff"
    };
  }
  tools() {
    return {};
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml(
      function (data) {
        var json = data.design;
        var html = data.html;
        console.log(json);
        console.log(html);
      },
      {
        cleanup: true
      }
    );
  }
  options() {
    return {
      mergeTags: {
        first_name: {
          name: "First Name",
          value: "{{first_name}}",
          sample: "John"
        },
        last_name: {
          name: "Last Name",
          value: "{{last_name}}",
          sample: "Doe"
        }
      },
      features: {
        stockImages: {
          enabled: false
        },
        undoRedo: false,
        textEditor: {
          cleanPaste: false
        }
      }
    };
  }
  appearance() {
    return {
      theme: "dark",
      panels: {
        tools: {
          dock: "right"
        }
      }
    };
  }
}
