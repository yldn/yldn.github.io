---
title: Code Snippet & Bilingual Post Example
title_zh: 代码片段与中英双语文章示例
date: 2026-07-15
description: A reference post demonstrating bilingual content, syntax-highlighted code blocks, and common Markdown elements.
description_zh: 一篇参考文章，展示中英双语内容、语法高亮代码块及常用 Markdown 元素。
excerpt_zh: 标准示例文章：中英双语字段、行内代码与多语言语法高亮代码块。
categories:
  - Tutorial
  - Software engineering
image: https://source.unsplash.com/collection/375719/2000x1322?a=.png
author_staff_member: timiu
content_zh: |
  本文是一份**标准示例文章**，用于展示本站文章系统的核心能力。点击页面右上角 **EN / 中** 按钮，可在英文与中文内容之间切换。

  ## 中英双语字段

  文章元数据支持双语字段：

  | 字段 | 英文 | 中文 |
  |------|------|------|
  | 标题 | `title` | `title_zh` |
  | 摘要 | `description` | `description_zh` |
  | 列表摘要 | 自动生成 `excerpt` | `excerpt_zh`（可选） |
  | 正文 | Markdown 正文 | `content_zh`（front matter 中） |

  英文正文写在文件底部的 Markdown 区域；中文正文写在 front matter 的 `content_zh` 字段中，由 Jekyll 自动 `markdownify` 渲染。

  ## 行内代码

  在段落中使用行内代码，例如调用 `console.log()`、读取环境变量 `NODE_ENV`，或引用配置文件 `_config.yml`。

  ## 代码块示例

  ### Python

  ```python
  from dataclasses import dataclass

  @dataclass
  class Post:
      title: str
      lang: str = "zh"

  def greet(post: Post) -> str:
      return f"Hello from {post.title} ({post.lang})"

  if __name__ == "__main__":
      print(greet(Post("示例文章", "zh")))
  ```

  ### JavaScript / TypeScript

  ```javascript
  const posts = [
    { title: "Hello World", lang: "en" },
    { title: "你好世界", lang: "zh" },
  ];

  const titles = posts
    .filter((post) => post.lang === "zh")
    .map((post) => post.title);

  console.log(titles.join(", "));
  ```

  ```typescript
  type Lang = "en" | "zh";

  interface BilingualPost {
    title: string;
    titleZh: string;
    lang: Lang;
  }

  const formatTitle = (post: BilingualPost, lang: Lang): string =>
    lang === "zh" ? post.titleZh : post.title;
  ```

  ### Java

  ```java
  public class Greeter {
      public static String greet(String name) {
          return "Hello, " + name + "!";
      }

      public static void main(String[] args) {
          System.out.println(greet("Timiu"));
      }
  }
  ```

  ### C / C++

  ```cpp
  #include <iostream>
  #include <string>

  int main() {
      std::string lang = "zh";
      std::cout << "Current language: " << lang << std::endl;
      return 0;
  }
  ```

  ### Shell / Bash

  ```bash
  # Build and preview the site locally
  bundle install
  bundle exec jekyll serve --livereload

  # Switch language in browser via localStorage
  localStorage.setItem("site_lang", "zh");
  ```

  ### JSON & YAML

  ```json
  {
    "title": "Code Snippet Example",
    "title_zh": "代码片段示例",
    "categories": ["Tutorial", "Software engineering"]
  }
  ```

  ```yaml
  title: Code Snippet Example
  title_zh: 代码片段示例
  markdown: kramdown
  kramdown:
    syntax_highlighter: rouge
  ```

  ### SQL

  ```sql
  SELECT p.title, p.title_zh, c.name AS category
  FROM posts AS p
  JOIN post_categories AS pc ON pc.post_id = p.id
  JOIN categories AS c ON c.id = pc.category_id
  WHERE p.published = TRUE
  ORDER BY p.created_at DESC
  LIMIT 10;
  ```

  ### 无语言标注的纯文本块

  ```
  POST /api/posts HTTP/1.1
  Content-Type: application/json

  { "title": "New Post", "lang": "zh" }
  ```

  ## 其他 Markdown 元素

  > 提示：代码块使用三个反引号包裹，并在开头指定语言标识，例如 ` ```python `，即可启用语法高亮。

  列表示例：

  - 支持 **粗体** 与 *斜体*
  - 支持 [站内链接](/blog/)
  - 支持图片与引用块

  1. 编写 front matter
  2. 分别填写英文正文与 `content_zh`
  3. 使用带语言标识的 fenced code block
  4. 本地预览或推送后在线查看

  ---

  以上就是一份可直接复用的标准文章模板。复制本文件并修改标题、日期与内容，即可快速发布新文章。
---

This post is a **standard reference article** for this site. Use the **EN / 中** toggle in the top-right corner to switch between English and Chinese content.

## Bilingual fields

Post metadata supports paired English / Chinese fields:

| Field | English | Chinese |
|-------|---------|---------|
| Title | `title` | `title_zh` |
| Summary | `description` | `description_zh` |
| List excerpt | auto `excerpt` | `excerpt_zh` (optional) |
| Body | Markdown body (below front matter) | `content_zh` (in front matter) |

Write English content in the Markdown body. Put Chinese content in the `content_zh` front matter field; Jekyll renders it with `markdownify`.

## Inline code

Use inline code inside paragraphs, for example calling `console.log()`, reading `NODE_ENV`, or referencing `_config.yml`.

## Code block examples

### Python

```python
from dataclasses import dataclass

@dataclass
class Post:
    title: str
    lang: str = "en"

def greet(post: Post) -> str:
    return f"Hello from {post.title} ({post.lang})"

if __name__ == "__main__":
    print(greet(Post("Example Post", "en")))
```

### JavaScript / TypeScript

```javascript
const posts = [
  { title: "Hello World", lang: "en" },
  { title: "你好世界", lang: "zh" },
];

const titles = posts
  .filter((post) => post.lang === "en")
  .map((post) => post.title);

console.log(titles.join(", "));
```

```typescript
type Lang = "en" | "zh";

interface BilingualPost {
  title: string;
  titleZh: string;
  lang: Lang;
}

const formatTitle = (post: BilingualPost, lang: Lang): string =>
  lang === "zh" ? post.titleZh : post.title;
```

### Java

```java
public class Greeter {
    public static String greet(String name) {
        return "Hello, " + name + "!";
    }

    public static void main(String[] args) {
        System.out.println(greet("Timiu"));
    }
}
```

### C / C++

```cpp
#include <iostream>
#include <string>

int main() {
    std::string lang = "en";
    std::cout << "Current language: " << lang << std::endl;
    return 0;
}
```

### Shell / Bash

```bash
# Build and preview the site locally
bundle install
bundle exec jekyll serve --livereload

# Switch language in browser via localStorage
localStorage.setItem("site_lang", "en");
```

### JSON & YAML

```json
{
  "title": "Code Snippet Example",
  "title_zh": "代码片段示例",
  "categories": ["Tutorial", "Software engineering"]
}
```

```yaml
title: Code Snippet Example
title_zh: 代码片段示例
markdown: kramdown
kramdown:
  syntax_highlighter: rouge
```

### SQL

```sql
SELECT p.title, p.title_zh, c.name AS category
FROM posts AS p
JOIN post_categories AS pc ON pc.post_id = p.id
JOIN categories AS c ON c.id = pc.category_id
WHERE p.published = TRUE
ORDER BY p.created_at DESC
LIMIT 10;
```

### Plain text block (no language tag)

```
POST /api/posts HTTP/1.1
Content-Type: application/json

{ "title": "New Post", "lang": "en" }
```

## Other Markdown elements

> Tip: Wrap code in triple backticks and add a language identifier after the opening fence, e.g. ` ```python `, to enable syntax highlighting.

List examples:

- Supports **bold** and *italic*
- Supports [internal links](/blog/)
- Supports images and blockquotes

1. Write front matter
2. Fill in English body and `content_zh`
3. Use fenced code blocks with a language tag
4. Preview locally or publish to view online

---

Copy this file, update the title, date, and content, and you have a ready-to-publish bilingual post template.
