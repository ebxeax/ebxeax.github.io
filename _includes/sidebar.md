{% unless site.github%}
{% if page.toc %}
## [目录]({{ '/' | relative_url }})

{{content | toc_only}}
{% endif %}
{% endunless%}

{% comment %}
{% if page.ads %}
## 延伸阅读
<ul>
{% for ad in page.ads %}
  <li>{{ad}}</li>
{% endfor %}
</ul>
{% endif %}
{% endcomment %}

## [订阅RSS]({{ '/feed.xml' | relative_url }})

## 实用工具

<ul>
{% for page in site.pages %}
  {%- if page.navigatable -%}
  <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
  {%- endif -%}
{% endfor %}
<li><a href="https://www.viewfact.org">睇料搜索</a></li>
</ul>

## [关于作者]({{ '/about.html' | relative_url }})

- [GitHub](https://github.com/ebxeax)

<a href="https://clustrmaps.com/site/1br5n"  title="Visit tracker"><img src="//www.clustrmaps.com/map_v2.png?d=AglIuiIPKtAddV3XjK5MYdak1EGEhiSmeI9VYyMnmdQ&cl=ffffff" /></a>