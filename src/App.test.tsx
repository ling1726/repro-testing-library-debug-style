import { render } from "@testing-library/react";

test("renders learn react link", () => {
  const css = ".foo { color: red; }";
  const { debug, container } = render(
    <div>
      Foo <style id="style-children">{css}</style>{" "}
      <style id="style-dangerous" dangerouslySetInnerHTML={{ __html: css }} />
    </div>
  );
  // style elements will not show up in debug
  debug();
  expect(container).toMatchInlineSnapshot(`
<div>
  <div>
    Foo 
    <style
      id="style-children"
    >
      .foo { color: red; }
    </style>
     
    <style
      id="style-dangerous"
    >
      .foo { color: red; }
    </style>
  </div>
</div>
`);
});
